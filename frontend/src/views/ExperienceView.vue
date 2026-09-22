<template>
  <main>
    <PageHero
      eyebrow="Experience"
      title="体验中心"
      description="集中展示产品 Demo、操作视频及后续试用环境入口。"
    />

    <section class="page-section">
      <div class="page-container">
        <div class="placeholder">
          当前阶段先预留体验入口，
          后续逐步接入各产品 Demo 与试用环境。
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