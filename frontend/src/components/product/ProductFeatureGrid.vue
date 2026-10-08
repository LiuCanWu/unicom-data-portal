<template>
  <div class="feature-grid">

    <article
      v-for="(feature, index) in features"
      :key="feature.title"
      class="feature-card"
    >
      <span class="feature-number">
        0{{ index + 1 }}
      </span>

      <h3>
        {{ feature.title }}
      </h3>

      <p>
        {{ feature.description }}
      </p>

    </article>

  </div>
</template>


<script setup lang="ts">
import type {
  ProductFeature,
} from '../../types/product'


defineProps<{
  features: ProductFeature[]
}>()
</script>


<style scoped>
.feature-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


.feature-card {
  min-height: 220px;

  padding: 28px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background: #ffffff;
}


.feature-number {
  display: block;

  margin-bottom: 28px;

  color:
    #bfd1e9;

  font-size: 28px;

  font-weight: 600;
}


h3 {
  margin:
    0 0 12px;

  font-size: 18px;
}


p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


@media (max-width: 900px) {
  .feature-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}


@media (max-width: 600px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>