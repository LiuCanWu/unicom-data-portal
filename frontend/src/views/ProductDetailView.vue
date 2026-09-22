<template>
  <main class="page">
    <div class="page-container">
      <p class="eyebrow">Product Detail</p>

      <h1>{{ productSlug }}</h1>

      <p class="description">
        当前为产品详情页占位页面。
        后续将根据产品 slug 动态加载对应产品内容。
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const productSlug = computed(() => {
  return String(route.params.slug || '')
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 96px 24px;
}

.page-container {
  max-width: 1180px;
  margin: 0 auto;
}

.eyebrow {
  color: #409eff;
  font-weight: 600;
}

h1 {
  margin: 12px 0 20px;
  font-size: 48px;
}

.description {
  max-width: 760px;
  line-height: 1.8;
  color: #4e5969;
}
</style>