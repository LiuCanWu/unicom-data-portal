// Hash 路由共用一个站点标识，路由切换不增加 PV。
// 模块级 Promise 保证同一次页面加载中，即使 Footer 重新挂载也只上报一次。
let visitCountRequest: Promise<number | null> | undefined

export function getSiteVisitCount(): Promise<number | null> {
  visitCountRequest ??= requestSiteVisitCount()
  return visitCountRequest
}

async function requestSiteVisitCount(): Promise<number | null> {
  // 本地调试不计入线上访问量。
  if (['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
    return null
  }

  // GitHub Pages 的多个项目共用 github.io，站点标识必须包含项目子路径。
  const basePath = import.meta.env.BASE_URL.split('/').filter(Boolean)
  const siteKey = [window.location.hostname, ...basePath].join('-').toLowerCase()
  const url = new URL('https://api.yuki-can.top/counter/pv')
  url.searchParams.set('site', siteKey)
  url.searchParams.set('inc', '1')

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 12000)

  try {
    const response = await fetch(url, {
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      cache: 'no-store',
      signal: controller.signal,
    })

    if (!response.ok) return null

    const data: unknown = await response.json()
    if (typeof data !== 'object' || data === null || !('count' in data) ||
      !('site' in data) || data.site !== siteKey) {
      return null
    }

    const value = data.count
    const count = typeof value === 'number'
      ? value
      : typeof value === 'string' && /^\d+$/.test(value) ? Number(value) : NaN

    return Number.isSafeInteger(count) && count >= 0 ? count : null
  } catch {
    return null
  } finally {
    window.clearTimeout(timeout)
  }
}
