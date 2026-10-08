<template>
  <main class="products-page">

    <!-- 页面顶部 -->
    <PageHero
      eyebrow="PRODUCTS"
      title="数据智能产品中心"
      description="围绕数据统一承载、高质量生产、智能语义、智能应用、可信流通与价值运营，构建覆盖数据全生命周期的数据智能产品体系。"
    />


    <!-- 产品价值链 -->
    <section class="value-chain-section">
      <div class="page-container">

        <div class="section-header">
          <p>PRODUCT MAP</p>

          <h2>
            从数据到底座，到智能与价值释放
          </h2>

          <span>
            以数据为基础，逐步向高质量生产、业务语义理解、
            智能应用、可信流通和价值量化延伸。
          </span>
        </div>


        <div class="value-chain">

          <div class="chain-item">
            <span class="chain-number">
              01
            </span>

            <strong>
              统一承载
            </strong>

            <p>
              湖仓一体
            </p>
          </div>


          <div class="chain-arrow">
            →
          </div>


          <div class="chain-item">
            <span class="chain-number">
              02
            </span>

            <strong>
              高质量生产
            </strong>

            <p>
              数据加工 / AI数据集
            </p>
          </div>


          <div class="chain-arrow">
            →
          </div>


          <div class="chain-item">
            <span class="chain-number">
              03
            </span>

            <strong>
              智能语义
            </strong>

            <p>
              本体建模
            </p>
          </div>


          <div class="chain-arrow">
            →
          </div>


          <div class="chain-item">
            <span class="chain-number">
              04
            </span>

            <strong>
              智能应用
            </strong>

            <p>
              自助分析 / 数据智能体
            </p>
          </div>


          <div class="chain-arrow">
            →
          </div>


          <div class="chain-item">
            <span class="chain-number">
              05
            </span>

            <strong>
              可信流通
            </strong>

            <p>
              可信数据空间
            </p>
          </div>


          <div class="chain-arrow">
            →
          </div>


          <div class="chain-item">
            <span class="chain-number">
              06
            </span>

            <strong>
              价值运营
            </strong>

            <p>
              数据计量计价
            </p>
          </div>

        </div>

      </div>
    </section>


    <!-- 产品列表 -->
    <section class="product-section">
      <div class="page-container">

        <div class="section-header">
          <p>PRODUCT FAMILY</p>

          <h2>
            产品家族
          </h2>

          <span>
            根据不同数据能力方向查看对应产品。
          </span>
        </div>


        <!-- 分类 -->
        <div class="category-tabs">

          <button
            class="category-tab"
            :class="{
              active: selectedCategory === 'all'
            }"
            @click="selectedCategory = 'all'"
          >
            全部产品
          </button>


          <button
            v-for="family in productFamilies"
            :key="family.id"
            class="category-tab"
            :class="{
              active:
                selectedCategory === family.id
            }"
            @click="
              selectedCategory = family.id
            "
          >
            {{ family.name }}
          </button>

        </div>


        <!-- 产品数量 -->
        <div class="product-result">
          共
          <strong>
            {{ filteredProducts.length }}
          </strong>
          个产品
        </div>


        <!-- 产品卡片 -->
        <div class="product-grid">

          <article
            v-for="product in filteredProducts"
            :key="product.id"
            class="product-card"
            @click="goProduct(product.slug)"
          >

            <div class="product-top">

              <span class="product-category">
                {{
                  getCategoryName(
                    product.category
                  )
                }}
              </span>


              <span
                v-if="
                  product.status ===
                  'coming-soon'
                "
                class="status-tag"
              >
                规划中
              </span>

            </div>


            <h3>
              {{ product.name }}
            </h3>


            <p class="product-tagline">
              {{ product.tagline }}
            </p>


            <div class="product-tags">

              <span
                v-for="tag in
                  product.tags.slice(0, 3)"
                :key="tag"
              >
                {{ tag }}
              </span>

            </div>


            <div class="product-footer">

              <span>
                查看产品详情
              </span>

              <span class="arrow">
                →
              </span>

            </div>

          </article>

        </div>

      </div>
    </section>

  </main>
</template>


<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import {
  useRouter,
} from 'vue-router'

import PageHero
  from '../components/PageHero.vue'

import {
  productFamilies,
} from '../data/productFamilies'

import {
  products,
} from '../data/products'

import type {
  ProductCategory,
} from '../types/product'


const router = useRouter()


type CategoryFilter =
  | ProductCategory
  | 'all'


const selectedCategory =
  ref<CategoryFilter>('all')


const filteredProducts =
  computed(() => {

    const sortedProducts = [
      ...products,
    ].sort(
      (a, b) =>
        a.order - b.order,
    )


    if (
      selectedCategory.value ===
      'all'
    ) {
      return sortedProducts
    }


    return sortedProducts.filter(
      product =>
        product.category ===
        selectedCategory.value,
    )
  })


function getCategoryName(
  category: ProductCategory,
) {
  const family =
    productFamilies.find(
      item =>
        item.id === category,
    )

  return (
    family?.name ||
    category
  )
}


function goProduct(
  slug: string,
) {
  router.push(
    `/products/${slug}`,
  )
}
</script>


<style scoped>
.products-page {
  background: #ffffff;
}


/* Section Header */

.section-header {
  max-width: 760px;

  margin-bottom: 42px;
}


.section-header > p {
  margin:
    0 0 10px;

  color:
    var(--color-primary);

  font-size: 13px;

  font-weight: 600;

  letter-spacing: 1px;
}


.section-header h2 {
  margin:
    0 0 16px;

  font-size: 36px;

  line-height: 1.3;
}


.section-header span {
  color:
    var(--color-text-secondary);

  font-size: 16px;

  line-height: 1.8;
}


/* 产品价值链 */

.value-chain-section {
  padding:
    80px 0;

  background:
    #ffffff;
}


.value-chain {
  display: flex;

  align-items: stretch;

  gap: 12px;
}


.chain-item {
  flex: 1;

  min-width: 0;

  padding:
    24px 18px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.chain-number {
  display: block;

  margin-bottom: 18px;

  color:
    #b6ccea;

  font-size: 24px;

  font-weight: 600;
}


.chain-item strong {
  display: block;

  margin-bottom: 10px;

  font-size: 17px;
}


.chain-item p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.6;
}


.chain-arrow {
  display: flex;

  align-items: center;
  justify-content: center;

  color:
    #b8c3d1;

  font-size: 22px;
}


/* 产品列表区域 */

.product-section {
  padding:
    80px 0 100px;

  background:
    var(--color-bg-light);
}


/* 分类 */

.category-tabs {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-bottom: 26px;
}


.category-tab {
  padding:
    10px 18px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    999px;

  background:
    #ffffff;

  color:
    var(--color-text-secondary);

  cursor: pointer;

  transition:
    all 0.2s;
}


.category-tab:hover {
  color:
    var(--color-primary);

  border-color:
    rgba(
      22,
      119,
      255,
      0.35
    );
}


.category-tab.active {
  color: #ffffff;

  border-color:
    var(--color-primary);

  background:
    var(--color-primary);
}


/* 产品数量 */

.product-result {
  margin-bottom: 20px;

  color:
    var(--color-text-tertiary);

  font-size: 13px;
}


.product-result strong {
  margin:
    0 4px;

  color:
    var(--color-text-primary);
}


/* 产品 Grid */

.product-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


/* 产品卡片 */

.product-card {
  position: relative;

  min-height: 310px;

  padding:
    28px;

  display: flex;

  flex-direction: column;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;

  cursor: pointer;

  transition:
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s;
}


.product-card:hover {
  transform:
    translateY(-5px);

  border-color:
    rgba(
      22,
      119,
      255,
      0.2
    );

  box-shadow:
    var(--shadow-card);
}


.product-top {
  display: flex;

  align-items: center;

  justify-content:
    space-between;

  margin-bottom: 22px;
}


.product-category {
  color:
    var(--color-primary);

  font-size: 13px;

  font-weight: 500;
}


.status-tag {
  padding:
    5px 9px;

  border-radius:
    999px;

  background:
    #f2f3f5;

  color:
    var(--color-text-tertiary);

  font-size: 11px;
}


.product-card h3 {
  margin:
    0 0 16px;

  font-size: 21px;

  line-height: 1.45;
}


.product-tagline {
  margin: 0;

  min-height: 76px;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.75;
}


/* Tags */

.product-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 20px;
}


.product-tags span {
  padding:
    6px 10px;

  border-radius:
    6px;

  background:
    #f3f7fd;

  color:
    #56708f;

  font-size: 12px;
}


/* Footer */

.product-footer {
  display: flex;

  align-items: center;

  justify-content:
    space-between;

  margin-top: auto;

  padding-top: 26px;

  color:
    var(--color-primary);

  font-size: 13px;
}


.arrow {
  font-size: 18px;

  transition:
    transform 0.2s;
}


.product-card:hover
.arrow {
  transform:
    translateX(4px);
}


/* Responsive */

@media (
  max-width: 1100px
) {
  .value-chain {
    display: grid;

    grid-template-columns:
      repeat(3, 1fr);
  }


  .chain-arrow {
    display: none;
  }


  .product-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}


@media (
  max-width: 700px
) {
  .value-chain {
    grid-template-columns:
      1fr;
  }


  .product-grid {
    grid-template-columns:
      1fr;
  }


  .section-header h2 {
    font-size: 30px;
  }
}
</style>