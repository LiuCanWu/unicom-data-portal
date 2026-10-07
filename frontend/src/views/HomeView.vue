<template>
  <main class="home-page">

    <!-- 01 Hero -->
    <section class="hero">
      <div class="page-container hero-inner">

        <div class="hero-content">
          <p class="hero-eyebrow">
            Unicom Data Intelligence
          </p>

          <h1>
            构建企业级
            <span>数据智能底座</span>
          </h1>

          <p class="hero-description">
            面向企业数智化与 AI 应用场景，
            提供覆盖数据存算、生产治理、高质量数据、
            智能语义、数据分析与可信流通的一体化产品能力。
          </p>

          <div class="hero-actions">
            <el-button
              type="primary"
              size="large"
              @click="router.push('/products')"
            >
              探索产品
            </el-button>

            <el-button
              size="large"
              @click="router.push('/experience')"
            >
              体验中心
            </el-button>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-core">
            数据智能
          </div>

          <div class="visual-item item-1">
            数据底座
          </div>

          <div class="visual-item item-2">
            数据生产
          </div>

          <div class="visual-item item-3">
            AI数据
          </div>

          <div class="visual-item item-4">
            智能语义
          </div>

          <div class="visual-item item-5">
            智能应用
          </div>
        </div>

      </div>
    </section>

    <!-- 02 产品家族 -->
    <section class="page-section family-section">
      <div class="page-container">

        <div class="section-header">
          <p>PRODUCT FAMILY</p>

          <h2>
            数据智能产品家族
          </h2>

          <span>
            覆盖数据从生产、治理、理解到应用的完整链路
          </span>
        </div>

        <div class="family-grid">
          <div
            v-for="family in productFamilies"
            :key="family.id"
            class="family-card"
          >
            <div class="family-icon">
              0{{ family.order }}
            </div>

            <h3>
              {{ family.name }}
            </h3>

            <p>
              {{ family.description }}
            </p>

            <div class="family-products">
              <span
                v-for="product in getFamilyProducts(family)"
                :key="product.id"
              >
                {{ product.name }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 03 核心产品 -->
    <section class="page-section core-section">
      <div class="page-container">

        <div class="section-header">
          <p>CORE PRODUCTS</p>

          <h2>
            核心产品
          </h2>

          <span>
            打通数据底座、数据生产、智能语义、智能应用、可信流通与价值运营
          </span>
        </div>

        <div class="product-list">
          <div
            v-for="(product, index) in coreProducts"
            :key="product.id"
            class="product-card"
          >
            <div class="product-number">
              0{{ index + 1 }}
            </div>

            <div class="product-info">
              <span class="product-category">
                {{ getCategoryName(product.category) }}
              </span>

              <h3>
                {{ product.name }}
              </h3>

              <p>
                {{ product.tagline }}
              </p>

              <a
                href="javascript:void(0)"
                @click="goProduct(product.slug)"
              >
                查看产品
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 04 核心优势 -->
    <section class="page-section advantage-section">
      <div class="page-container">

        <div class="section-header light">
          <p>WHY US</p>

          <h2>
            企业级数据智能能力
          </h2>

          <span>
            面向复杂数据环境和企业级 AI 应用需求持续演进
          </span>
        </div>

        <div class="advantage-grid">
          <div
            v-for="item in advantages"
            :key="item.title"
            class="advantage-item"
          >
            <strong>
              {{ item.value }}
            </strong>

            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.description }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- 05 应用场景 -->
    <section class="page-section scenario-section">
      <div class="page-container">

        <div class="section-header">
          <p>SCENARIOS</p>

          <h2>
            赋能多元业务场景
          </h2>

          <span>
            从企业内部运营到行业客户数智化转型
          </span>
        </div>

        <div class="scenario-grid">
          <div
            v-for="scenario in scenarios"
            :key="scenario"
            class="scenario-card"
          >
            {{ scenario }}
          </div>
        </div>

      </div>
    </section>

    <!-- 06 CTA -->
    <section class="cta-section">
      <div class="page-container">

        <div class="cta-box">
          <div>
            <p>
              START EXPERIENCE
            </p>

            <h2>
              体验联通数据智能产品能力
            </h2>

            <span>
              查看产品 Demo，并逐步接入各产品试用环境
            </span>
          </div>

          <el-button
            type="primary"
            size="large"
            @click="router.push('/experience')"
          >
            进入体验中心
          </el-button>
        </div>

      </div>
    </section>

  </main>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router'

import {
  productFamilies,
  type ProductFamily,
} from '../data/productFamilies'

import {
  getFeaturedProducts,
  getProductsByCategory,
} from '../data/products'


const router = useRouter()


const coreProducts = getFeaturedProducts()


const advantages = [
  {
    value: '01',
    title: '全链路',
    description:
      '覆盖数据存算、生产、治理、语义、分析与流通完整链路。',
  },
  {
    value: '02',
    title: 'AI Ready',
    description:
      '面向大模型与智能应用持续升级企业数据基础设施。',
  },
  {
    value: '03',
    title: '企业级',
    description:
      '服务集团化、复杂组织和大规模数据应用场景。',
  },
  {
    value: '04',
    title: '自主可控',
    description:
      '持续沉淀自主数据平台核心技术与产品能力。',
  },
]


const scenarios = [
  '公众运营',
  '政企运营',
  '管理运营',
  '客服运营',
  '智慧办公',
  '数据治理',
  '行业客户',
  '可信流通',
]


function getFamilyProducts(
  family: ProductFamily,
) {
  return getProductsByCategory(
    family.id,
  ).slice(0, 3)
}


function getCategoryName(
  category: string,
) {
  const family = productFamilies.find(
    item => item.id === category,
  )

  return family?.name || category
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
.hero {
  min-height:
    calc(100vh - var(--header-height));

  display: flex;
  align-items: center;

  background:
    radial-gradient(
      circle at 75% 35%,
      rgba(22, 119, 255, 0.14),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      #f5f9ff 0%,
      #ffffff 100%
    );
}


.hero-inner {
  display: grid;

  grid-template-columns:
    1.1fr 0.9fr;

  align-items: center;

  gap: 80px;
}


.hero-eyebrow {
  margin:
    0 0 20px;

  color:
    var(--color-primary);

  font-size: 14px;
  font-weight: 600;

  letter-spacing: 1.5px;
}


.hero h1 {
  max-width: 720px;

  margin: 0;

  font-size: 64px;

  line-height: 1.12;
}


.hero h1 span {
  color:
    var(--color-primary);
}


.hero-description {
  max-width: 700px;

  margin:
    28px 0 0;

  font-size: 19px;

  line-height: 1.85;

  color:
    var(--color-text-secondary);
}


.hero-actions {
  display: flex;

  gap: 16px;

  margin-top: 40px;
}


/* Hero 右侧视觉区域 */

.hero-visual {
  position: relative;

  width: 420px;
  height: 420px;

  margin-left: auto;
}


.visual-core {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 150px;
  height: 150px;

  transform:
    translate(-50%, -50%);

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #1677ff,
      #4e9cff
    );

  font-size: 22px;

  font-weight: 600;

  box-shadow:
    0 20px 50px
    rgba(22, 119, 255, 0.28);
}


.visual-item {
  position: absolute;

  padding:
    12px 20px;

  border:
    1px solid
    rgba(22, 119, 255, 0.15);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.9);

  box-shadow:
    var(--shadow-card);

  font-size: 14px;
}


.item-1 {
  top: 20px;
  left: 140px;
}


.item-2 {
  top: 110px;
  right: 0;
}


.item-3 {
  right: 10px;
  bottom: 90px;
}


.item-4 {
  left: 50px;
  bottom: 20px;
}


.item-5 {
  left: 0;
  top: 130px;
}


/* 通用 section 标题 */

.section-header {
  max-width: 700px;

  margin-bottom: 48px;
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

  font-size: 38px;
}


.section-header span {
  color:
    var(--color-text-secondary);

  font-size: 17px;
}


/* 产品家族 */

.family-section {
  background: #ffffff;
}


.family-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 16px;
}


.family-card {
  min-height: 300px;

  padding:
    28px 24px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  transition:
    transform 0.25s,
    box-shadow 0.25s;
}


.family-card:hover {
  transform:
    translateY(-6px);

  box-shadow:
    var(--shadow-card);
}


.family-icon {
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 28px;

  border-radius: 10px;

  color:
    var(--color-primary);

  background:
    #eef5ff;

  font-weight: 600;
}


.family-card h3 {
  margin: 0;

  font-size: 19px;
}


.family-card > p {
  min-height: 72px;

  margin:
    14px 0 20px;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.7;
}


.family-products {
  display: flex;

  flex-direction: column;

  gap: 8px;
}


.family-products span {
  font-size: 13px;

  color:
    var(--color-text-tertiary);
}


/* 核心产品 */

.core-section {
  background:
    var(--color-bg-light);
}


/*
 * 7 个核心产品：
 * PC 端采用 4 + 3 布局，
 * 比一行塞 7 个可读性更好。
 */
.product-list {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}


.product-card {
  min-height: 340px;

  padding:
    28px 24px;

  display: flex;

  flex-direction: column;

  background: #ffffff;

  border:
    1px solid
    rgba(229, 230, 235, 0.6);

  border-radius:
    var(--radius-lg);

  transition:
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s;
}


.product-card:hover {
  transform:
    translateY(-5px);

  border-color:
    rgba(22, 119, 255, 0.16);

  box-shadow:
    var(--shadow-card);
}


.product-number {
  margin-bottom: 32px;

  color: #c9d9ef;

  font-size: 34px;

  font-weight: 600;
}


.product-category {
  color:
    var(--color-primary);

  font-size: 12px;
}


.product-info {
  display: flex;

  flex: 1;

  flex-direction: column;
}


.product-info h3 {
  margin:
    10px 0 14px;

  min-height: 52px;

  font-size: 18px;

  line-height: 1.45;
}


.product-info p {
  margin: 0;

  min-height: 88px;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.75;
}


.product-info a {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  margin-top: auto;

  padding-top: 22px;

  color:
    var(--color-primary);

  font-size: 13px;
}


/* 核心优势 */

.advantage-section {
  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #0e213f,
      #132f5a
    );
}


.section-header.light > p {
  color: #76adff;
}


.section-header.light span {
  color:
    rgba(255, 255, 255, 0.64);
}


.advantage-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 48px;
}


.advantage-item strong {
  color: #76adff;

  font-size: 36px;
}


.advantage-item h3 {
  margin:
    18px 0 12px;

  font-size: 20px;
}


.advantage-item p {
  margin: 0;

  color:
    rgba(255, 255, 255, 0.62);

  font-size: 14px;

  line-height: 1.8;
}


/* 应用场景 */

.scenario-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 16px;
}


.scenario-card {
  padding:
    32px 24px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-md);

  font-size: 17px;

  font-weight: 500;
}


/* CTA */

.cta-section {
  padding:
    40px 0 80px;
}


.cta-box {
  padding: 56px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  border-radius:
    var(--radius-lg);

  background:
    linear-gradient(
      135deg,
      #eef5ff,
      #f7faff
    );
}


.cta-box p {
  margin:
    0 0 10px;

  color:
    var(--color-primary);

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 1px;
}


.cta-box h2 {
  margin:
    0 0 12px;

  font-size: 30px;
}


.cta-box span {
  color:
    var(--color-text-secondary);
}


/* Responsive */

@media (max-width: 1100px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }


  .hero-visual {
    display: none;
  }


  .family-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .product-list {
    grid-template-columns:
      repeat(2, 1fr);
  }
}


@media (max-width: 768px) {
  .hero {
    padding:
      80px 0;
  }


  .hero h1 {
    font-size: 42px;
  }


  .hero-description {
    font-size: 16px;
  }


  .family-grid,
  .product-list,
  .advantage-grid,
  .scenario-grid {
    grid-template-columns: 1fr;
  }


  .cta-box {
    padding:
      36px 28px;

    flex-direction: column;

    align-items: flex-start;

    gap: 28px;
  }
}
</style>