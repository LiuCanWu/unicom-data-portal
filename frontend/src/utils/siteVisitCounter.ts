// Hash 路由共用同一个站点路径，因此该路径的 PV 即本门户的累计访问量。
// 模块级 Promise 保证同一次页面加载中，即使 Footer 重新挂载也只上报一次。
let visitCountRequest: Promise<number | null> | undefined

export function getSiteVisitCount(): Promise<number | null> {
  visitCountRequest ??= requestSiteVisitCount()
  return visitCountRequest
}

async function requestSiteVisitCount(): Promise<number | null> {
  // 官方服务不接收本地开发域名，也避免开发调试请求进入线上统计。
  if (['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
    return null
  }

  // 不提交路由 Hash、查询参数或来源页面 URL。
  const siteUrl = new URL(import.meta.env.BASE_URL, window.location.origin).href
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch('https://cdn.busuanzi.cc/api.php', {
      method: 'POST',
      body: JSON.stringify({ url: siteUrl, referrer: '' }),
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      cache: 'no-store',
      signal: controller.signal,
    })

    if (!response.ok) return null

    const data: unknown = await response.json()
    if (typeof data !== 'object' || data === null || !('busuanzi_page_pv' in data)) {
      return null
    }

    const value = data.busuanzi_page_pv
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
