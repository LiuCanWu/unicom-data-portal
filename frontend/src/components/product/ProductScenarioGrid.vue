<template>
  <div class="scenario-grid">

    <article
      v-for="scenario in scenarios"
      :key="scenario.title"
      class="scenario-card"
    >
      <h3>
        {{ scenario.title }}
      </h3>

      <p
        v-if="scenario.description"
      >
        {{ scenario.description }}
      </p>
    </article>

  </div>
</template>


<script setup lang="ts">
import type {
  ProductScenario,
} from '../../types/product'


defineProps<{
  scenarios: ProductScenario[]
}>()
</script>


<style scoped>
.scenario-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 16px;
}


.scenario-card {
  min-height: 140px;

  padding: 26px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-md);

  background: #ffffff;
}


h3 {
  margin: 0;

  font-size: 17px;
}


p {
  margin:
    12px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.7;
}


@media (max-width: 900px) {
  .scenario-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}


@media (max-width: 600px) {
  .scenario-grid {
    grid-template-columns: 1fr;
  }
}
</style>