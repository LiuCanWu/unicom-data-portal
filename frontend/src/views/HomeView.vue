<template>
  <main class="home-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Unicom Data Portal</p>

        <h1>联通数据智能产品门户</h1>

        <p class="subtitle">
          汇聚数据基础设施、数据生产治理、数据分析智能与数据流通能力，
          为客户提供统一的数据产品展示与体验入口。
        </p>

        <div class="hero-actions">
          <el-button type="primary" size="large">
            探索产品
          </el-button>

          <el-button size="large">
            体验中心
          </el-button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
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
    radial-gradient(circle at 20% 20%, rgba(64, 158, 255, 0.16), transparent 32%),
    linear-gradient(180deg, #f7faff 0%, #ffffff 100%);
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

@media (max-width: 768px) {
  h1 {
    font-size: 38px;
  }

  .subtitle {
    font-size: 17px;
  }
}
</style>