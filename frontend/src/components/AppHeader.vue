<template>
  <header class="app-header">
    <div class="header-inner">
      <router-link
        to="/"
        class="brand"
      >
        <div class="brand-mark">
          U
        </div>

        <div class="brand-text">
          <span class="brand-title">
            联通数据智能
          </span>

          <span class="brand-subtitle">
            Data Intelligence
          </span>
        </div>
      </router-link>

      <nav class="nav">
        <router-link
          to="/"
          class="nav-item"
        >
          首页
        </router-link>

        <router-link
          to="/products"
          class="nav-item"
        >
          产品
        </router-link>

        <router-link
          to="/experience"
          class="nav-item"
        >
          体验中心
        </router-link>

        <router-link
          to="/solutions"
          class="nav-item"
        >
          解决方案
        </router-link>

        <router-link
          to="/about"
          class="nav-item"
        >
          关于我们
        </router-link>
      </nav>

      <div class="header-actions">
        <el-button>
          联系我们
        </el-button>

        <el-button
          type="primary"
          @click="goExperience"
        >
          立即体验
        </el-button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goExperience() {
  router.push('/experience')
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;

  height: var(--header-height);

  background:
    rgba(255, 255, 255, 0.94);

  border-bottom:
    1px solid var(--color-border);

  backdrop-filter: blur(12px);
}

.header-inner {
  width: 100%;
  max-width: var(--page-max-width);

  height: 100%;

  margin: 0 auto;
  padding: 0 var(--page-padding-x);

  display: flex;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;

  flex-shrink: 0;
}

.brand-mark {
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  color: #ffffff;
  background: var(--color-primary);

  font-weight: 700;
  font-size: 20px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
}

.brand-subtitle {
  font-size: 10px;
  line-height: 14px;
  color: var(--color-text-tertiary);
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;

  margin-left: 56px;
}

.nav-item {
  position: relative;

  padding: 21px 14px;

  font-size: 14px;

  color: var(--color-text-secondary);

  transition: color 0.2s;
}

.nav-item:hover {
  color: var(--color-primary);
}

.nav-item.router-link-active {
  color: var(--color-primary);
  font-weight: 500;
}

.nav-item.router-link-active::after {
  content: "";

  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 0;

  height: 2px;

  background: var(--color-primary);
}

.header-actions {
  display: flex;
  gap: 12px;

  margin-left: auto;
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .header-actions {
    display: none;
  }
}
</style>