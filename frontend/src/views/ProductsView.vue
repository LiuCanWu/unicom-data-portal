<template>
  <main>
    <PageHero
      eyebrow="Products"
      title="产品中心"
      description="汇聚联通数据中台核心产品能力，覆盖数据基础设施、数据生产治理、数据分析智能与数据流通等方向。"
    />

    <section class="page-section">
      <div class="page-container">
        <div class="placeholder">
          产品家族将在后续 Task 中接入。
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
</script>

<style scoped>
.placeholder {
  padding: 32px;

  background: var(--color-bg-light);

  border-radius: var(--radius-md);

  color: var(--color-text-tertiary);
}
</style>