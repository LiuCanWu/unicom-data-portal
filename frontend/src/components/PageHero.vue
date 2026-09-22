<template>
  <section class="page-hero">
    <div class="page-container">
      <p
        v-if="eyebrow"
        class="eyebrow"
      >
        {{ eyebrow }}
      </p>

      <h1>
        {{ title }}
      </h1>

      <p
        v-if="description"
        class="description"
      >
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<style scoped>
.page-hero {
  padding: 88px 0 64px;

  background:
    linear-gradient(
      180deg,
      #f7faff 0%,
      #ffffff 100%
    );
}

.eyebrow {
  margin: 0 0 12px;

  color: var(--color-primary);

  font-size: 14px;
  font-weight: 600;

  letter-spacing: 0.5px;
}

h1 {
  margin: 0;

  font-size: 48px;
  line-height: 1.2;
}

.description {
  max-width: 760px;

  margin: 20px 0 0;

  color: var(--color-text-secondary);

  font-size: 18px;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 64px 0 48px;
  }

  h1 {
    font-size: 36px;
  }

  .description {
    font-size: 16px;
  }
}
</style>