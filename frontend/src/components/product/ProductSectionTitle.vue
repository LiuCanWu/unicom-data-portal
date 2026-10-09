<template>
  <div class="section-title">

    <p
      v-if="eyebrow"
      class="eyebrow"
    >
      {{ eyebrow }}
    </p>


    <div class="title-row">

      <h2>
        {{ title }}
      </h2>

      <span class="title-line" />

    </div>


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
  max-width: 780px;

  margin-bottom: 44px;
}


.eyebrow {
  margin:
    0 0 10px;

  color:
    var(--color-primary);

  font-size: 11px;

  font-weight: 600;

  letter-spacing:
    1.4px;
}


.title-row {
  display: flex;

  align-items: center;

  gap: 20px;
}


h2 {
  flex-shrink: 0;

  margin: 0;

  color:
    var(--color-text-primary);

  font-size: 36px;

  font-weight: 600;

  line-height: 1.3;

  letter-spacing:
    -0.03em;
}


.title-line {
  width: 72px;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-primary),
      transparent
    );
}


.description {
  margin:
    16px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 15px;

  line-height: 1.85;
}


@media (max-width: 768px) {
  h2 {
    font-size: 30px;
  }


  .title-line {
    width: 42px;
  }
}
</style>