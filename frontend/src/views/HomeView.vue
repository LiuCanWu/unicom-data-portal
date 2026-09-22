<template>
  <main class="home-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">
          Unicom Data Portal
        </p>

        <h1>
          联通数据智能产品门户
        </h1>

        <p class="subtitle">
          汇聚数据基础设施、数据生产治理、数据分析智能与数据流通能力，
          为客户提供统一的数据产品展示与体验入口。
        </p>

        <div class="hero-actions">

          <div class="quick-links">
            <router-link to="/products">
              产品中心
            </router-link>

            <router-link to="/experience">
              体验中心
            </router-link>

            <router-link to="/solutions">
              解决方案
            </router-link>

            <router-link to="/about">
              关于我们
            </router-link>
          </div>

          <el-button 
          type="primary"
          size="large"
          @click="$router.push('/products')"
          >
            探索产品
          </el-button>

          <el-button 
          size="large"
          @click="$router.push('/experience')"
          >
            体验中心
          </el-button>
        </div>

        <div class="service-status">
          <span class="status-label">
            后端服务：
          </span>

          <el-tag
            v-if="backendStatus === 'ok'"
            type="success"
          >
            正常
          </el-tag>

          <el-tag
            v-else-if="backendStatus === 'loading'"
            type="info"
          >
            检测中
          </el-tag>

          <el-tag
            v-else
            type="danger"
          >
            异常
          </el-tag>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { getHealth } from '../api/health'

const backendStatus = ref<'loading' | 'ok' | 'error'>('loading')

async function checkBackendHealth() {
  try {
    const response = await getHealth()

    if (response.data.status === 'ok') {
      backendStatus.value = 'ok'
    } else {
      backendStatus.value = 'error'
    }
  } catch (error) {
    backendStatus.value = 'error'
  }
}

onMounted(() => {
  checkBackendHealth()
})
</script>

<style scoped>
.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 28px;
}

.quick-links a {
  color: #409eff;
  font-size: 15px;
}

.home-page {
  min-height: 100vh;
}

.hero {
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(64, 158, 255, 0.16),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      #f7faff 0%,
      #ffffff 100%
    );
}

.hero-content {
  width: 100%;
  max-width: 1180px;
}

.eyebrow {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #409eff;
  letter-spacing: 1px;
}

h1 {
  margin: 0;
  max-width: 760px;
  font-size: 56px;
  line-height: 1.15;
  color: #1d2129;
}

.subtitle {
  max-width: 720px;
  margin-top: 28px;
  font-size: 20px;
  line-height: 1.8;
  color: #4e5969;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 40px;
}

.service-status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
}

.status-label {
  font-size: 14px;
  color: #86909c;
}

@media (max-width: 768px) {
  h1 {
    font-size: 38px;
  }

  .subtitle {
    font-size: 17px;
  }
}
</style>