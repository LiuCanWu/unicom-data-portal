<template>
  <div class="section-title">
    <p
      v-if="eyebrow"
      class="eyebrow"
    >
      {{ eyebrow }}
    </p>

    <h2>
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="description"
    >
      {{ description }}
    </p>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>


<style scoped>
.section-title {
  max-width: 760px;

  margin-bottom: 42px;
}


.eyebrow {
  margin:
    0 0 10px;

  color:
    var(--color-primary);

  font-size: 13px;

  font-weight: 600;

  letter-spacing: 1px;
}


h2 {
  margin: 0;

  font-size: 36px;

  line-height: 1.3;
}


.description {
  margin:
    16px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 16px;

  line-height: 1.8;
}


@media (max-width: 768px) {
  h2 {
    font-size: 30px;
  }
}
</style>