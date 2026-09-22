<template>
  <main>
    <PageHero
      eyebrow="Solutions"
      title="解决方案"
      description="面向运营商、央企、政务、金融、工业等场景，展示数据智能产品组合与典型解决方案。"
    />

    <section class="page-section">
      <div class="page-container">
        <div class="placeholder">
          解决方案内容将在后续逐步补充。
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