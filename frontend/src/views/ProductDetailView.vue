<template>
  <main class="product-detail-page">

    <section
      v-if="product"
      class="product-hero"
    >
      <div class="page-container">

        <span class="product-category">
          {{ categoryName }}
        </span>

        <h1>
          {{ product.name }}
        </h1>

        <p class="tagline">
          {{ product.tagline }}
        </p>

        <div class="product-tags">
          <span
            v-for="tag in product.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>

      </div>
    </section>


    <section
      v-if="product"
      class="page-section"
    >
      <div class="page-container">

        <h2>
          产品简介
        </h2>

        <p class="description">
          {{ product.description }}
        </p>

      </div>
    </section>


    <section
      v-if="product"
      class="page-section feature-section"
    >
      <div class="page-container">

        <h2>
          核心能力
        </h2>

        <div class="feature-grid">
          <div
            v-for="feature in product.features"
            :key="feature.title"
            class="feature-card"
          >
            <h3>
              {{ feature.title }}
            </h3>

            <p>
              {{ feature.description }}
            </p>
          </div>
        </div>

      </div>
    </section>


    <section
      v-if="product"
      class="page-section"
    >
      <div class="page-container">

        <h2>
          应用场景
        </h2>

        <div class="scenario-grid">
          <div
            v-for="scenario in product.scenarios"
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
          </div>
        </div>

      </div>
    </section>


    <section
      v-if="!product"
      class="not-found"
    >
      <div class="page-container">

        <h1>
          产品不存在
        </h1>

        <p>
          当前访问的产品地址无效，
          请返回产品中心重新选择。
        </p>

        <el-button
          type="primary"
          @click="router.push('/products')"
        >
          返回产品中心
        </el-button>

      </div>
    </section>

  </main>
</template>


<script setup lang="ts">
import { computed } from 'vue'

import {
  useRoute,
  useRouter,
} from 'vue-router'

import {
  getProductBySlug,
} from '../data/products'

import {
  productFamilies,
} from '../data/productFamilies'


const route = useRoute()

const router = useRouter()


const product = computed(() => {
  const slug = String(
    route.params.slug || '',
  )

  return getProductBySlug(slug)
})


const categoryName = computed(() => {
  if (!product.value) {
    return ''
  }

  const family = productFamilies.find(
    item =>
      item.id === product.value?.category,
  )

  return family?.name || ''
})
</script>


<style scoped>
.product-hero {
  padding:
    100px 0 80px;

  background:
    linear-gradient(
      180deg,
      #f5f9ff 0%,
      #ffffff 100%
    );
}


.product-category {
  display: inline-block;

  margin-bottom: 18px;

  color:
    var(--color-primary);

  font-size: 14px;

  font-weight: 600;
}


.product-hero h1 {
  margin: 0;

  font-size: 52px;

  line-height: 1.2;
}


.tagline {
  max-width: 820px;

  margin:
    24px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 20px;

  line-height: 1.8;
}


.product-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 30px;
}


.product-tags span {
  padding:
    7px 12px;

  border-radius: 999px;

  background:
    #eef5ff;

  color:
    var(--color-primary);

  font-size: 13px;
}


h2 {
  margin:
    0 0 30px;

  font-size: 32px;
}


.description {
  max-width: 920px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 17px;

  line-height: 1.9;
}


.feature-section {
  background:
    var(--color-bg-light);
}


.feature-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


.feature-card {
  padding:
    28px;

  background: #ffffff;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);
}


.feature-card h3 {
  margin:
    0 0 12px;

  font-size: 18px;
}


.feature-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


.scenario-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 16px;
}


.scenario-card {
  padding:
    26px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-md);
}


.scenario-card h3 {
  margin: 0;

  font-size: 16px;
}


.scenario-card p {
  margin:
    12px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.7;
}


.not-found {
  min-height:
    600px;

  padding:
    120px 0;
}


.not-found h1 {
  margin: 0;

  font-size: 48px;
}


.not-found p {
  margin:
    18px 0 30px;

  color:
    var(--color-text-secondary);
}


@media (max-width: 900px) {
  .feature-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .scenario-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}


@media (max-width: 600px) {
  .product-hero h1 {
    font-size: 38px;
  }


  .tagline {
    font-size: 17px;
  }


  .feature-grid,
  .scenario-grid {
    grid-template-columns: 1fr;
  }
}
</style>