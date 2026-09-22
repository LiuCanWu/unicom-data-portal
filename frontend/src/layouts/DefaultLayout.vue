<template>
  <div class="default-layout">
    <AppHeader />

    <main class="main-content">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
}

.main-content {
  min-height: calc(
    100vh - var(--header-height)
  );
}
</style>