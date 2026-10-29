<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-main">
        <div class="footer-brand">
          <div class="footer-logo">
            U
          </div>

          <h3>
            联通数据智能产品门户
          </h3>

          <p>
            汇聚数据基础设施、数据生产治理、
            数据分析智能与数据流通能力，
            为客户提供统一的数据产品展示与体验入口。
          </p>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h4>产品</h4>

            <router-link to="/products">
              产品中心
            </router-link>

            <router-link to="/experience">
              体验中心
            </router-link>
          </div>

          <div class="footer-column">
            <h4>解决方案</h4>

            <router-link to="/solutions">
              行业解决方案
            </router-link>

            <a href="javascript:void(0)">
              客户案例
            </a>
          </div>

          <div class="footer-column">
            <h4>关于</h4>

            <router-link to="/about">
              关于我们
            </router-link>

            <a href="javascript:void(0)">
              联系我们
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>
          © 2026 Unicom Data Portal
        </span>

        <span>
          当前为产品门户 MVP
        </span>

        <span>
          本站累计访问量：{{ visitCount === null ? '暂无统计数据' : `${visitCount.toLocaleString('zh-CN')} 次` }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSiteVisitCount } from '../utils/siteVisitCounter'

const visitCount = ref<number | null>(null)

onMounted(async () => {
  visitCount.value = await getSiteVisitCount()
})
</script>

<style scoped>
.app-footer {
  margin-top: 80px;

  background: #101828;
  color: #ffffff;
}

.footer-inner {
  width: 100%;
  max-width: var(--page-max-width);

  margin: 0 auto;
  padding:
    56px
    var(--page-padding-x)
    28px;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

.footer-brand {
  max-width: 440px;
}

.footer-logo {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 10px;

  background: var(--color-primary);

  font-weight: 700;
}

.footer-brand h3 {
  margin: 0 0 16px;

  font-size: 18px;
}

.footer-brand p {
  margin: 0;

  font-size: 14px;
  line-height: 1.8;

  color: rgba(255, 255, 255, 0.64);
}

.footer-columns {
  display: flex;
  gap: 72px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;

  min-width: 100px;
}

.footer-column h4 {
  margin: 0 0 6px;

  font-size: 14px;
}

.footer-column a {
  font-size: 13px;

  color: rgba(255, 255, 255, 0.58);
}

.footer-column a:hover {
  color: #ffffff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 24px;

  margin-top: 48px;
  padding-top: 24px;

  border-top:
    1px solid rgba(255, 255, 255, 0.1);

  font-size: 12px;

  color: rgba(255, 255, 255, 0.42);
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
  }

  .footer-columns {
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
