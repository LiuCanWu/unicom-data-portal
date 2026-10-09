<template>
  <main class="products-page">

    <!-- =====================================================
         01 Hero
    ====================================================== -->
    <PageHero
      eyebrow="PRODUCTS"
      title="数据智能产品中心"
      description="围绕数据底座、数据生产、智能语义、数据分析与可信流通，构建覆盖数据全生命周期的一体化产品体系。"
    />


    <!-- =====================================================
         02 产品体系概览
    ====================================================== -->
    <section class="overview-section">

      <div class="page-container">

        <div class="overview-panel">

          <div class="overview-copy">

            <p class="section-eyebrow">
              PRODUCT SYSTEM
            </p>

            <h2>
              从数据基础设施
              <span>走向数据智能与价值释放</span>
            </h2>

            <p>
              以湖仓一体为数据底座，
              通过数据生产、高质量数据、业务语义和智能应用，
              进一步延伸至可信流通与数据价值运营。
            </p>

          </div>


          <div class="overview-chain">

            <div
              v-for="stage in systemStages"
              :key="stage.number"
              class="overview-stage"
            >
              <span>
                {{ stage.number }}
              </span>

              <strong>
                {{ stage.title }}
              </strong>

              <small>
                {{ stage.english }}
              </small>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         03 产品家族
    ====================================================== -->
    <section class="family-section">

      <div class="page-container">

        <div class="section-heading">

          <div>
            <p class="section-eyebrow">
              PRODUCT FAMILY
            </p>

            <h2>
              五大产品能力方向
            </h2>
          </div>

          <p class="section-description">
            从基础设施到智能应用，
            按照企业数据能力建设阶段组织产品家族。
          </p>

        </div>


        <div class="family-grid">

          <button
            class="family-card all-family"
            :class="{
              active:
                selectedCategory === 'all'
            }"
            type="button"
            @click="selectedCategory = 'all'"
          >

            <div class="family-number">
              ALL
            </div>

            <h3>
              全部产品
            </h3>

            <p>
              查看完整的数据智能产品体系。
            </p>

            <span class="family-count">
              {{ products.length }}
              PRODUCTS
            </span>

          </button>


          <button
            v-for="family in productFamilies"
            :key="family.id"
            type="button"
            class="family-card"
            :class="{
              active:
                selectedCategory === family.id
            }"
            @click="
              selectedCategory = family.id
            "
          >

            <div class="family-number">
              0{{ family.order }}
            </div>

            <small>
              {{ family.englishName }}
            </small>

            <h3>
              {{ family.name }}
            </h3>

            <p>
              {{ family.description }}
            </p>

            <span class="family-count">
              {{
                getProductCount(
                  family.id
                )
              }}
              PRODUCTS
            </span>

          </button>

        </div>

      </div>

    </section>


    <!-- =====================================================
         04 产品列表
    ====================================================== -->
    <section class="product-section">

      <div class="page-container">

        <div class="product-toolbar">

          <div>

            <p class="section-eyebrow">
              PRODUCT LIST
            </p>

            <h2>
              {{ currentCategoryName }}
            </h2>

            <p class="result-text">
              共
              <strong>
                {{ filteredProducts.length }}
              </strong>
              个产品
            </p>

          </div>


          <div class="toolbar-tabs">

            <button
              type="button"
              :class="{
                active:
                  selectedCategory === 'all'
              }"
              @click="
                selectedCategory = 'all'
              "
            >
              全部
            </button>

            <button
              v-for="family in productFamilies"
              :key="family.id"
              type="button"
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

        </div>


        <div class="product-grid">

          <article
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            class="product-card"
            @click="goProduct(product.slug)"
          >

            <div class="product-card-head">

              <span class="product-index">
                {{
                  formatNumber(
                    index + 1
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


            <div class="product-category">
              {{
                getCategoryName(
                  product.category
                )
              }}
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


            <div class="product-card-footer">

              <span>
                查看产品详情
              </span>

              <strong>
                →
              </strong>

            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         05 CTA
    ====================================================== -->
    <section class="cta-section">

      <div class="page-container">

        <div class="cta-box">

          <div>
            <p>
              PRODUCT EXPERIENCE
            </p>

            <h2>
              进一步体验产品核心能力
            </h2>

            <span>
              进入体验中心查看产品 Demo、
              视频介绍与独立试用环境。
            </span>
          </div>


          <el-button
            type="primary"
            size="large"
            @click="
              router.push(
                '/experience'
              )
            "
          >
            前往体验中心
          </el-button>

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


const router =
  useRouter()


type CategoryFilter =
  | ProductCategory
  | 'all'


const selectedCategory =
  ref<CategoryFilter>('all')


const systemStages = [
  {
    number: '01',
    title: '数据底座',
    english: 'FOUNDATION',
  },
  {
    number: '02',
    title: '数据生产',
    english: 'ENGINEERING',
  },
  {
    number: '03',
    title: '智能语义',
    english: 'SEMANTIC',
  },
  {
    number: '04',
    title: '智能应用',
    english: 'INTELLIGENCE',
  },
  {
    number: '05',
    title: '可信流通',
    english: 'CIRCULATION',
  },
  {
    number: '06',
    title: '价值运营',
    english: 'VALUE',
  },
]


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


const currentCategoryName =
  computed(() => {

    if (
      selectedCategory.value ===
      'all'
    ) {
      return '全部产品'
    }


    const family =
      productFamilies.find(
        item =>
          item.id ===
          selectedCategory.value,
      )


    return (
      family?.name ||
      '产品'
    )
  })


function getProductCount(
  category: ProductCategory,
) {
  return products.filter(
    product =>
      product.category ===
      category,
  ).length
}


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


function formatNumber(
  index: number,
) {
  return String(
    index,
  ).padStart(
    2,
    '0',
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
  background:
    #ffffff;
}


/* =====================================================
   通用标题
===================================================== */

.section-heading {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  align-items: end;

  gap: 80px;

  margin-bottom: 46px;
}


.section-heading h2 {
  margin: 0;

  font-size: 36px;
}


.section-heading
.section-description {
  margin: 0;
}


/* =====================================================
   产品体系概览
===================================================== */

.overview-section {
  padding:
    72px 0 42px;
}


.overview-panel {
  display: grid;

  grid-template-columns:
    minmax(300px, 0.8fr)
    minmax(0, 1.2fr);

  align-items: center;

  gap: 60px;

  padding:
    46px;

  border:
    1px solid
    rgba(
      21,
      101,
      216,
      0.10
    );

  border-radius:
    var(--radius-xl);

  background:
    linear-gradient(
      135deg,
      #f7faff,
      #ffffff
    );
}


.overview-copy h2 {
  margin: 0;

  font-size: 34px;

  line-height: 1.4;
}


.overview-copy h2 span {
  display: block;

  color:
    var(--color-primary);
}


.overview-copy > p:last-child {
  max-width: 520px;

  margin:
    20px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.9;
}


.overview-chain {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 10px;
}


.overview-stage {
  min-height: 100px;

  padding: 16px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    12px;

  background:
    #ffffff;
}


.overview-stage span {
  color:
    #bfd0e4;

  font-size: 17px;

  font-weight: 600;
}


.overview-stage strong {
  display: block;

  margin-top: 12px;

  font-size: 13px;
}


.overview-stage small {
  display: block;

  margin-top: 4px;

  color:
    var(--color-text-tertiary);

  font-size: 7px;

  letter-spacing:
    0.7px;
}


/* =====================================================
   产品家族
===================================================== */

.family-section {
  padding:
    70px 0 82px;
}


.family-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 16px;
}


.family-card {
  position: relative;

  min-height: 220px;

  padding: 25px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;

  text-align: left;

  cursor: pointer;

  transition:
    all
    var(--transition-normal);
}


.family-card:hover {
  transform:
    translateY(-4px);

  border-color:
    rgba(
      21,
      101,
      216,
      0.2
    );

  box-shadow:
    var(--shadow-card);
}


.family-card.active {
  border-color:
    rgba(
      21,
      101,
      216,
      0.26
    );

  background:
    linear-gradient(
      135deg,
      #f2f7ff,
      #ffffff
    );
}


.family-number {
  color:
    #bfd0e4;

  font-size: 24px;

  font-weight: 600;
}


.family-card small {
  display: block;

  margin-top: 22px;

  color:
    var(--color-primary);

  font-size: 8px;

  letter-spacing:
    0.8px;
}


.family-card h3 {
  margin:
    6px 0 10px;

  font-size: 18px;
}


.family-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.75;
}


.family-count {
  position: absolute;

  right: 22px;

  bottom: 20px;

  color:
    var(--color-text-tertiary);

  font-size: 8px;

  letter-spacing:
    0.7px;
}


.all-family {
  background:
    linear-gradient(
      145deg,
      #102b50,
      #164f91
    );
}


.all-family
.family-number {
  color:
    rgba(
      255,
      255,
      255,
      0.35
    );
}


.all-family h3 {
  margin-top: 22px;

  color: #ffffff;
}


.all-family p {
  color:
    rgba(
      255,
      255,
      255,
      0.6
    );
}


.all-family
.family-count {
  color:
    rgba(
      255,
      255,
      255,
      0.4
    );
}


/* =====================================================
   产品列表
===================================================== */

.product-section {
  padding:
    80px 0 100px;

  background:
    var(--color-bg-light);
}


.product-toolbar {
  display: flex;

  align-items: flex-end;

  justify-content:
    space-between;

  gap: 40px;

  margin-bottom: 32px;
}


.product-toolbar h2 {
  margin: 0;

  font-size: 34px;
}


.result-text {
  margin:
    10px 0 0;

  color:
    var(--color-text-tertiary);

  font-size: 13px;
}


.result-text strong {
  margin:
    0 4px;

  color:
    var(--color-text-primary);
}


.toolbar-tabs {
  display: flex;

  flex-wrap: wrap;

  justify-content:
    flex-end;

  gap: 7px;
}


.toolbar-tabs button {
  padding:
    8px 14px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    999px;

  background:
    #ffffff;

  color:
    var(--color-text-secondary);

  font-size: 12px;

  cursor: pointer;

  transition:
    all
    var(--transition-fast);
}


.toolbar-tabs button:hover {
  color:
    var(--color-primary);
}


.toolbar-tabs button.active {
  border-color:
    var(--color-primary);

  background:
    var(--color-primary);

  color:
    #ffffff;
}


/* 产品卡片 */

.product-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 18px;
}


.product-card {
  min-height: 320px;

  padding: 27px;

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
    all
    var(--transition-normal);
}


.product-card:hover {
  transform:
    translateY(-5px);

  border-color:
    rgba(
      21,
      101,
      216,
      0.18
    );

  box-shadow:
    var(--shadow-card-hover);
}


.product-card-head {
  display: flex;

  align-items: center;

  justify-content:
    space-between;
}


.product-index {
  color:
    #c1d1e5;

  font-size: 26px;

  font-weight: 600;
}


.status-tag {
  padding:
    5px 9px;

  border-radius:
    999px;

  background:
    #f1f3f5;

  color:
    var(--color-text-tertiary);

  font-size: 10px;
}


.product-category {
  margin-top: 30px;

  color:
    var(--color-primary);

  font-size: 11px;

  font-weight: 500;
}


.product-card h3 {
  margin:
    8px 0 14px;

  font-size: 20px;

  line-height: 1.45;
}


.product-tagline {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


.product-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;

  margin-top: 21px;
}


.product-tags span {
  padding:
    5px 8px;

  border-radius:
    5px;

  background:
    #f4f7fb;

  color:
    #607186;

  font-size: 10px;
}


.product-card-footer {
  display: flex;

  align-items: center;

  justify-content:
    space-between;

  margin-top: auto;

  padding-top: 26px;

  color:
    var(--color-primary);

  font-size: 12px;
}


.product-card-footer strong {
  font-size: 17px;

  transition:
    transform
    var(--transition-fast);
}


.product-card:hover
.product-card-footer strong {
  transform:
    translateX(4px);
}


/* =====================================================
   CTA
===================================================== */

.cta-section {
  padding:
    76px 0 100px;
}


.cta-box {
  padding: 50px;

  display: flex;

  align-items: center;

  justify-content:
    space-between;

  gap: 36px;

  border-radius:
    var(--radius-xl);

  background:
    linear-gradient(
      135deg,
      #edf5ff,
      #f8fbff
    );
}


.cta-box p {
  margin:
    0 0 9px;

  color:
    var(--color-primary);

  font-size: 10px;

  font-weight: 600;

  letter-spacing:
    1.3px;
}


.cta-box h2 {
  margin:
    0 0 12px;

  font-size: 29px;
}


.cta-box span {
  color:
    var(--color-text-secondary);

  font-size: 14px;
}


/* =====================================================
   Responsive
===================================================== */

@media (max-width: 1050px) {
  .overview-panel {
    grid-template-columns:
      1fr;
  }


  .family-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .product-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}


@media (max-width: 760px) {
  .section-heading {
    grid-template-columns:
      1fr;

    gap: 18px;
  }


  .overview-panel {
    padding: 30px;
  }


  .overview-chain {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .family-grid {
    grid-template-columns:
      1fr;
  }


  .product-toolbar {
    align-items:
      flex-start;

    flex-direction:
      column;
  }


  .toolbar-tabs {
    justify-content:
      flex-start;
  }


  .product-grid {
    grid-template-columns:
      1fr;
  }


  .cta-box {
    align-items:
      flex-start;

    flex-direction:
      column;
  }
}
</style>