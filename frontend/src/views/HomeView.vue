<template>
  <main class="home-page">

    <!-- =====================================================
         01 Hero
    ====================================================== -->
    <section class="hero">

      <div class="page-container hero-inner">

        <!-- 左侧文案 -->
        <div class="hero-content">

          <p class="hero-eyebrow">
            UNICOM DATA INTELLIGENCE
          </p>

          <h1>
            构建企业级
            <span>
              数据智能产品体系
            </span>
          </h1>

          <p class="hero-description">
            面向企业数智化与 AI 应用，
            构建覆盖数据底座、数据生产、高质量数据、
            智能语义、数据分析、可信流通与价值运营的
            一体化数据智能产品能力。
          </p>

          <div class="hero-actions">

            <el-button
              type="primary"
              size="large"
              @click="router.push('/products')"
            >
              浏览产品
            </el-button>

            <el-button
              size="large"
              @click="router.push('/experience')"
            >
              体验中心
            </el-button>

          </div>


          <!-- 动态统计 -->
          <div class="hero-overview">

            <div class="overview-item">
              <strong>
                {{ products.length }}
              </strong>

              <span>
                数据智能产品
              </span>
            </div>

            <div class="overview-line" />

            <div class="overview-item">
              <strong>
                {{ productFamilies.length }}
              </strong>

              <span>
                产品能力方向
              </span>
            </div>

            <div class="overview-line" />

            <div class="overview-item">
              <strong>
                {{ coreProducts.length }}
              </strong>

              <span>
                核心产品
              </span>
            </div>

          </div>

        </div>


        <!-- =================================================
             右侧：数据智能产品体系
        ================================================== -->
        <div class="architecture-system">

          <!-- 标题 -->
          <div class="architecture-head">

            <div>
              <p>
                PRODUCT SYSTEM
              </p>

              <h3>
                联通数据智能产品体系
              </h3>
            </div>

            <span>
              DATA → INTELLIGENCE → VALUE
            </span>

          </div>


          <!-- =============================================
               应用层
          ============================================== -->
          <section class="arch-layer arch-application">

            <div class="arch-layer-label">
              <span>
                01
              </span>

              <strong>
                应用层
              </strong>
            </div>


            <div class="arch-app-grid">

              <button
                type="button"
                class="arch-product"
                @click="goProduct('self-service-bi')"
              >
                <small>
                  DATA ANALYTICS
                </small>

                <strong>
                  自助数据分析平台
                </strong>

                <p>
                  分析 · 图表 · 取数
                </p>
              </button>


              <button
                type="button"
                class="arch-product featured"
                @click="goProduct('data-agent')"
              >
                <small>
                  DATA AGENT
                </small>

                <strong>
                  专家级数据智能体
                </strong>

                <p>
                  问数 · 报告 · 分析
                </p>
              </button>


              <button
                type="button"
                class="arch-product"
                @click="goProduct('data-pricing')"
              >
                <small>
                  DATA VALUE
                </small>

                <strong>
                  数据计量计价平台
                </strong>

                <p>
                  计量 · 计价 · 收益
                </p>
              </button>

            </div>

          </section>


          <!-- 层间关系 -->
          <div class="arch-flow">
            <span>
              ↑
            </span>

            <i />

            <em>
              数据服务
            </em>
          </div>


          <!-- =============================================
               流通层
          ============================================== -->
          <section class="arch-layer arch-circulation">

            <div class="arch-layer-label">
              <span>
                02
              </span>

              <strong>
                流通层
              </strong>
            </div>


            <div class="arch-circulation-content">

              <div class="arch-role">
                数据提供方
              </div>


              <div class="arch-role-arrow">
                →
              </div>


              <button
                type="button"
                class="arch-trusted"
                @click="goProduct('trusted-data-space')"
              >
                <small>
                  TRUSTED DATA SPACE
                </small>

                <strong>
                  企业可信数据空间
                </strong>

                <p>
                  可信管控 · 资源交互 · 价值共创
                </p>
              </button>


              <div class="arch-role-arrow">
                ←
              </div>


              <div class="arch-role">
                数据使用方
              </div>

            </div>

          </section>


          <!-- 层间关系 -->
          <div class="arch-flow">
            <span>
              ↑
            </span>

            <i />

            <em>
              高质量数据供给
            </em>
          </div>


          <!-- =============================================
               加工层
          ============================================== -->
          <section class="arch-layer arch-processing">

            <div class="arch-layer-label">
              <span>
                03
              </span>

              <strong>
                加工层
              </strong>
            </div>


            <div class="arch-processing-grid">

              <!-- 数据生产流水线 -->
              <button
                type="button"
                class="arch-product processing-main"
                @click="goProduct('data-pipeline')"
              >
                <small>
                  DATA ENGINEERING
                </small>

                <strong>
                  全链路数据智能生产流水线
                </strong>

                <p>
                  采集 · 清洗 · 标注 · 质检 · 增强
                </p>
              </button>


              <div class="arch-link">
                →
              </div>


              <!-- AI高质量数据集 -->
              <button
                type="button"
                class="arch-product dataset-product"
                @click="goProduct('ai-dataset')"
              >
                <small>
                  AI READY DATA
                </small>

                <strong>
                  AI高质量数据集
                </strong>

                <p>
                  文本 · 图像 · 音频 · 视频
                </p>
              </button>


              <div class="arch-link">
                ↔
              </div>


              <!-- 本体 -->
              <button
                type="button"
                class="arch-product semantic-product"
                @click="goProduct('ontology')"
              >
                <small>
                  SEMANTIC LAYER
                </small>

                <strong>
                  本体建模平台
                </strong>

                <p>
                  对象 · 关系 · 规则 · 行动
                </p>
              </button>

            </div>

          </section>


          <!-- 层间关系 -->
          <div class="arch-flow">
            <span>
              ↑
            </span>

            <i />

            <em>
              统一数据供给
            </em>
          </div>


          <!-- =============================================
               底座层
          ============================================== -->
          <section class="arch-layer arch-foundation">

            <div class="arch-layer-label">
              <span>
                04
              </span>

              <strong>
                底座层
              </strong>
            </div>


            <div class="arch-foundation-content">

              <button
                type="button"
                class="arch-lakehouse"
                @click="goProduct('lakehouse')"
              >
                <small>
                  DATA FOUNDATION
                </small>

                <strong>
                  湖仓一体数据平台
                </strong>

                <p>
                  统一存储 · 多引擎 · 批流一体 · 多模态
                </p>
              </button>


              <div class="arch-source-row">

                <span>
                  内部数据
                </span>

                <span>
                  开源数据
                </span>

                <span>
                  商用数据
                </span>

                <span>
                  行业数据
                </span>

              </div>

            </div>

          </section>


          <!-- 产品体系底部 -->
          <div class="architecture-foot">

            <span>
              DATA FOUNDATION
            </span>

            <i />

            <span>
              DATA ENGINEERING
            </span>

            <i />

            <span>
              DATA CIRCULATION
            </span>

            <i />

            <span>
              INTELLIGENCE
            </span>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         02 产品能力地图
    ====================================================== -->
    <section class="page-section capability-section">

      <div class="page-container">

        <div class="section-heading">

          <div>

            <p class="section-eyebrow">
              PRODUCT MAP
            </p>

            <h2>
              从数据底座到价值释放
            </h2>

          </div>


          <p class="section-description">
            围绕数据全生命周期形成完整产品链路，
            让数据从统一承载、生产加工逐步走向智能应用、
            可信流通和价值运营。
          </p>

        </div>


        <div class="capability-map">

          <article
            v-for="stage in capabilityStages"
            :key="stage.id"
            class="capability-stage"
          >

            <div class="stage-top">

              <span class="stage-number">
                {{ stage.number }}
              </span>

              <span class="stage-english">
                {{ stage.english }}
              </span>

            </div>


            <h3>
              {{ stage.title }}
            </h3>


            <p>
              {{ stage.description }}
            </p>


            <div class="stage-products">

              <button
                v-for="product in getStageProducts(stage.productIds)"
                :key="product.id"
                type="button"
                @click="goProduct(product.slug)"
              >
                {{ product.shortName || product.name }}

                <span>
                  →
                </span>
              </button>

            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         03 产品家族
    ====================================================== -->
    <section class="page-section family-section">

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
            通过统一产品家族组织数据能力，
            支撑不同客户从基础设施建设到数据智能应用的不同阶段需求。
          </p>

        </div>


        <div class="family-list">

          <article
            v-for="family in productFamilies"
            :key="family.id"
            class="family-item"
          >

            <div class="family-index">
              0{{ family.order }}
            </div>


            <div class="family-main">

              <span>
                {{ family.englishName }}
              </span>

              <h3>
                {{ family.name }}
              </h3>

              <p>
                {{ family.description }}
              </p>

            </div>


            <div class="family-products">

              <button
                v-for="product in getFamilyProducts(family)"
                :key="product.id"
                type="button"
                @click="goProduct(product.slug)"
              >
                {{ product.name }}
              </button>

            </div>


            <div class="family-count">
              {{
                getFamilyProducts(
                  family,
                ).length
              }}
              PRODUCTS
            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         04 核心产品
    ====================================================== -->
    <section class="page-section core-section">

      <div class="page-container">

        <div class="section-heading">

          <div>

            <p class="section-eyebrow">
              CORE PRODUCTS
            </p>

            <h2>
              七大核心产品
            </h2>

          </div>


          <p class="section-description">
            打通数据底座、数据生产、智能语义、
            智能应用、可信流通与价值运营。
          </p>

        </div>


        <div class="core-product-list">

          <article
            v-for="(product, index) in coreProducts"
            :key="product.id"
            class="core-product-item"
            @click="goProduct(product.slug)"
          >

            <div class="core-number">
              0{{ index + 1 }}
            </div>


            <div class="core-category">
              {{
                getCategoryName(
                  product.category,
                )
              }}
            </div>


            <h3>
              {{ product.name }}
            </h3>


            <p>
              {{ product.tagline }}
            </p>


            <div class="core-footer">

              <span>
                查看产品
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
         05 业务场景
    ====================================================== -->
    <section class="page-section scenario-section">

      <div class="page-container">

        <div class="section-heading">

          <div>

            <p class="section-eyebrow">
              BUSINESS SCENARIOS
            </p>

            <h2>
              面向业务场景释放数据价值
            </h2>

          </div>


          <p class="section-description">
            产品能力并非独立存在，
            而是围绕数据生产、经营决策、AI应用与数据流通等真实业务场景形成组合。
          </p>

        </div>


        <div class="business-grid">

          <article
            v-for="scenario in businessScenarios"
            :key="scenario.number"
            class="business-card"
          >

            <div class="business-top">

              <span>
                {{ scenario.number }}
              </span>

              <strong>
                {{ scenario.english }}
              </strong>

            </div>


            <h3>
              {{ scenario.title }}
            </h3>


            <p>
              {{ scenario.description }}
            </p>


            <div class="business-tags">

              <span
                v-for="tag in scenario.tags"
                :key="tag"
              >
                {{ tag }}
              </span>

            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         06 核心优势
    ====================================================== -->
    <section class="advantage-section">

      <div class="page-container">

        <div class="advantage-heading">

          <div>

            <p>
              PLATFORM ADVANTAGES
            </p>

            <h2>
              企业级数据智能能力
            </h2>

          </div>


          <span>
            面向复杂组织、大规模数据和多样化业务场景持续沉淀。
          </span>

        </div>


        <div class="advantage-grid">

          <article
            v-for="advantage in advantages"
            :key="advantage.number"
            class="advantage-item"
          >

            <strong>
              {{ advantage.number }}
            </strong>

            <h3>
              {{ advantage.title }}
            </h3>

            <p>
              {{ advantage.description }}
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         07 CTA
    ====================================================== -->
    <section class="cta-section">

      <div class="page-container">

        <div class="cta-box">

          <div>

            <p>
              START EXPLORING
            </p>

            <h2>
              进一步了解联通数据智能产品
            </h2>

            <span>
              浏览产品详情，
              或进入体验中心查看产品 Demo 与试用入口。
            </span>

          </div>


          <div class="cta-actions">

            <el-button
              type="primary"
              size="large"
              @click="router.push('/products')"
            >
              浏览产品
            </el-button>

            <el-button
              size="large"
              @click="router.push('/experience')"
            >
              体验中心
            </el-button>

          </div>

        </div>

      </div>

    </section>

  </main>
</template>


<script setup lang="ts">
import {
  useRouter,
} from 'vue-router'

import {
  productFamilies,
  type ProductFamily,
} from '../data/productFamilies'

import {
  getFeaturedProducts,
  getProductsByCategory,
  products,
} from '../data/products'

import type {
  Product,
  ProductCategory,
} from '../types/product'


const router =
  useRouter()


const coreProducts =
  getFeaturedProducts()


interface CapabilityStage {
  id: string

  number: string

  title: string

  english: string

  description: string

  productIds: string[]
}


const capabilityStages: CapabilityStage[] = [
  {
    id: 'foundation',

    number: '01',

    title: '数据底座',

    english: 'FOUNDATION',

    description:
      '统一承载企业结构化、非结构化及AI数据，提供稳定的数据存储与计算底座。',

    productIds: [
      'lakehouse',
    ],
  },

  {
    id: 'engineering',

    number: '02',

    title: '数据生产',

    english: 'ENGINEERING',

    description:
      '统一数据采集、加工、质检与治理流程，持续生产高质量、可复用的数据资产。',

    productIds: [
      'data-pipeline',
      'ai-dataset',
    ],
  },

  {
    id: 'semantic',

    number: '03',

    title: '智能语义',

    english: 'SEMANTIC',

    description:
      '构建统一业务对象、关系、规则和行动，让数据能够被AI准确理解和使用。',

    productIds: [
      'ontology',
    ],
  },

  {
    id: 'intelligence',

    number: '04',

    title: '智能应用',

    english: 'INTELLIGENCE',

    description:
      '降低数据使用门槛，让业务人员更便捷地完成分析、洞察与经营决策。',

    productIds: [
      'self-service-bi',
      'data-agent',
    ],
  },

  {
    id: 'circulation',

    number: '05',

    title: '可信流通',

    english: 'CIRCULATION',

    description:
      '通过可信控制与空间互联，支撑数据在不同组织和主体之间安全高效流通。',

    productIds: [
      'trusted-data-space',
    ],
  },

  {
    id: 'value',

    number: '06',

    title: '价值运营',

    english: 'VALUE',

    description:
      '量化数据成本、收益和价值，支撑科学定价、计量计费与数据资产运营。',

    productIds: [
      'data-pricing',
    ],
  },
]


const businessScenarios = [
  {
    number: '01',

    english:
      'DATA ENGINEERING',

    title:
      '企业数据生产与治理',

    description:
      '围绕多源数据接入、开发加工、质量检测和治理，构建稳定、高效的数据生产体系。',

    tags: [
      '数据开发',
      '数据治理',
      '数据质量',
    ],
  },

  {
    number: '02',

    english:
      'BUSINESS ANALYTICS',

    title:
      '经营分析与智能决策',

    description:
      '服务管理人员、经营分析人员和一线业务人员，提升取数、分析和决策效率。',

    tags: [
      '自助分析',
      '智能问数',
      '智能报告',
    ],
  },

  {
    number: '03',

    english:
      'AI READY DATA',

    title:
      'AI数据与智能应用',

    description:
      '为大模型训练、RAG、智能体和企业AI应用提供高质量数据与统一业务语义支撑。',

    tags: [
      'AI数据集',
      '本体',
      '智能体',
    ],
  },

  {
    number: '04',

    english:
      'DATA VALUE',

    title:
      '数据可信流通与价值运营',

    description:
      '支撑数据安全共享、可信使用、科学计价和数据资产价值持续释放。',

    tags: [
      '可信数据空间',
      '计量计价',
      '价值运营',
    ],
  },
]


const advantages = [
  {
    number: '01',

    title: '全链路',

    description:
      '覆盖数据存算、生产、治理、语义、分析、流通和价值运营完整链路。',
  },

  {
    number: '02',

    title: 'AI Ready',

    description:
      '持续面向大模型与智能体升级企业数据基础设施和数据供给能力。',
  },

  {
    number: '03',

    title: '企业级',

    description:
      '面向集团型企业、复杂组织和大规模数据场景形成产品化能力。',
  },

  {
    number: '04',

    title: '自主可控',

    description:
      '持续沉淀自主研发能力，并面向国产软硬件生态进行产品适配。',
  },
]


function getFamilyProducts(
  family: ProductFamily,
) {
  return getProductsByCategory(
    family.id,
  )
}


function getStageProducts(
  productIds: string[],
): Product[] {
  return productIds
    .map(
      productId =>
        products.find(
          product =>
            product.id === productId,
        ),
    )
    .filter(
      (
        product,
      ): product is Product =>
        product !== undefined,
    )
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


function goProduct(
  slug: string,
) {
  router.push(
    `/products/${slug}`,
  )
}
</script>


<style scoped>
.home-page {
  overflow: hidden;

  background:
    #ffffff;
}


/* =====================================================
   Hero
===================================================== */

.hero {
  position: relative;

  min-height:
    calc(
      100vh -
      var(--header-height)
    );

  display: flex;

  align-items: center;

  padding:
    72px 0 86px;

  background:
    radial-gradient(
      circle at 82% 26%,
      rgba(21, 101, 216, 0.09),
      transparent 27%
    ),
    linear-gradient(
      180deg,
      #f6f9fd 0%,
      #ffffff 92%
    );
}


.hero-inner {
  display: grid;

  grid-template-columns:
    minmax(0, 0.90fr)
    minmax(590px, 1.10fr);

  align-items: center;

  gap: 64px;
}


.hero-eyebrow {
  margin:
    0 0 18px;

  color:
    var(--color-primary);

  font-size: 12px;

  font-weight: 600;

  letter-spacing:
    1.7px;
}


.hero h1 {
  max-width: 680px;

  margin: 0;

  font-size: 56px;

  font-weight: 600;

  line-height: 1.14;

  letter-spacing:
    -0.045em;
}


.hero h1 span {
  display: block;

  margin-top: 6px;

  color:
    var(--color-primary);
}


.hero-description {
  max-width: 650px;

  margin:
    28px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 17px;

  line-height: 1.9;
}


.hero-actions {
  display: flex;

  gap: 12px;

  margin-top: 38px;
}


/* Hero Stats */

.hero-overview {
  display: flex;

  align-items: center;

  gap: 22px;

  margin-top: 52px;
}


.overview-item {
  display: flex;

  align-items: baseline;

  gap: 7px;
}


.overview-item strong {
  color:
    var(--color-text-primary);

  font-size: 24px;

  font-weight: 600;
}


.overview-item span {
  color:
    var(--color-text-tertiary);

  font-size: 11px;
}


.overview-line {
  width: 1px;

  height: 25px;

  background:
    var(--color-border);
}


/* =====================================================
   Product Architecture - Refined
===================================================== */

.architecture-system {
  padding: 24px;

  border:
    1px solid
    rgba(21, 101, 216, 0.10);

  border-radius:
    22px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.98),
      #f5f9fe
    );

  box-shadow:
    0 28px 68px
    rgba(17, 45, 82, 0.10);
}


/* Head */

.architecture-head {
  display: flex;

  align-items: flex-end;

  justify-content:
    space-between;

  gap: 20px;

  padding-bottom: 16px;

  border-bottom:
    1px solid
    var(--color-border-light);
}


.architecture-head p {
  margin: 0;

  color:
    var(--color-primary);

  font-size: 8px;

  font-weight: 600;

  letter-spacing:
    1.5px;
}


.architecture-head h3 {
  margin:
    4px 0 0;

  font-size: 16px;
}


.architecture-head > span {
  color:
    var(--color-text-tertiary);

  font-size: 7px;

  letter-spacing:
    0.9px;
}


/* Layer */

.arch-layer {
  display: grid;

  grid-template-columns:
    52px minmax(0, 1fr);

  align-items: center;

  gap: 12px;

  padding:
    10px 0;
}


.arch-layer-label {
  align-self: stretch;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding-right: 10px;

  border-right:
    2px solid
    rgba(21, 101, 216, 0.15);
}


.arch-layer-label span {
  color:
    #b6c8dd;

  font-size: 7px;
}


.arch-layer-label strong {
  margin-top: 3px;

  color:
    #1b54a3;

  font-size: 10px;
}


/* Product */

.arch-product {
  min-width: 0;

  padding:
    12px 10px;

  border:
    1px solid
    rgba(21, 101, 216, 0.10);

  border-radius:
    12px;

  background:
    rgba(255, 255, 255, 0.90);

  text-align: left;

  cursor: pointer;

  transition:
    transform
    var(--transition-fast),
    border-color
    var(--transition-fast),
    box-shadow
    var(--transition-fast);
}


.arch-product:hover {
  transform:
    translateY(-2px);

  border-color:
    rgba(21, 101, 216, 0.28);

  box-shadow:
    0 7px 18px
    rgba(15, 35, 65, 0.07);
}


.arch-product small {
  display: block;

  color:
    var(--color-primary);

  font-size: 6px;

  letter-spacing:
    0.7px;
}


.arch-product strong {
  display: block;

  margin-top: 4px;

  color:
    #164f9d;

  font-size: 10px;

  line-height: 1.4;
}


.arch-product p {
  margin:
    5px 0 0;

  color:
    var(--color-text-tertiary);

  font-size: 7px;
}


/* =====================================================
   Application
===================================================== */

.arch-app-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 8px;

  padding: 11px;

  border-radius:
    18px;

  background:
    linear-gradient(
      180deg,
      rgba(230, 242, 255, 0.82),
      rgba(248, 251, 255, 0.96)
    );
}


.arch-product.featured {
  background:
    linear-gradient(
      135deg,
      #edf5ff,
      #ffffff
    );

  border-color:
    rgba(21, 101, 216, 0.16);
}


/* =====================================================
   Flow
===================================================== */

.arch-flow {
  display: grid;

  grid-template-columns:
    1fr auto 1fr;

  align-items: center;

  gap: 8px;

  height: 18px;

  padding-left: 64px;
}


.arch-flow i {
  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #a8c3e1,
      transparent
    );
}


.arch-flow span {
  grid-column: 2;

  color:
    #5d94d3;

  font-size: 11px;
}


.arch-flow em {
  grid-column: 3;

  color:
    #9a7a32;

  font-size: 6px;

  font-style: normal;
}


/* =====================================================
   Circulation
===================================================== */

.arch-circulation-content {
  display: grid;

  grid-template-columns:
    0.72fr
    20px
    1.45fr
    20px
    0.72fr;

  align-items: center;

  gap: 5px;

  padding:
    12px 16px;

  border:
    1px solid
    rgba(21, 101, 216, 0.14);

  border-radius:
    20px;

  background:
    linear-gradient(
      180deg,
      #edf6ff,
      #f9fcff
    );
}


.arch-role {
  padding:
    9px 7px;

  border-radius:
    999px;

  background:
    #ffffff;

  color:
    var(--color-text-secondary);

  text-align: center;

  font-size: 8px;

  box-shadow:
    0 4px 12px
    rgba(15, 35, 65, 0.04);
}


.arch-role-arrow {
  color:
    #4d8dd6;

  text-align: center;

  font-size: 13px;
}


.arch-trusted {
  padding:
    11px 10px;

  border: 0;

  border-radius:
    14px;

  background:
    linear-gradient(
      135deg,
      #0f73e5,
      #1264c4
    );

  color:
    #ffffff;

  cursor: pointer;

  box-shadow:
    0 8px 20px
    rgba(15, 105, 218, 0.20);

  transition:
    transform
    var(--transition-fast),
    box-shadow
    var(--transition-fast);
}


.arch-trusted:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0 12px 24px
    rgba(15, 105, 218, 0.24);
}


.arch-trusted small {
  color:
    rgba(255, 255, 255, 0.55);

  font-size: 6px;

  letter-spacing:
    0.8px;
}


.arch-trusted strong {
  display: block;

  margin-top: 4px;

  font-size: 11px;
}


.arch-trusted p {
  margin:
    5px 0 0;

  color:
    rgba(255, 255, 255, 0.78);

  font-size: 7px;
}


/* =====================================================
   Processing
===================================================== */

.arch-processing-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 1.55fr)
    18px
    minmax(100px, 0.80fr)
    18px
    minmax(0, 1fr);

  align-items: center;

  gap: 5px;

  padding: 12px;

  border-radius:
    18px;

  background:
    linear-gradient(
      180deg,
      #eef6ff,
      #f9fcff
    );
}


.processing-main {
  background:
    linear-gradient(
      135deg,
      #f6faff,
      #ffffff
    );
}


.dataset-product {
  background:
    linear-gradient(
      135deg,
      #f2f8ff,
      #ffffff
    );
}


.semantic-product {
  background:
    linear-gradient(
      135deg,
      #f3f3ff,
      #ffffff
    );
}


.arch-link {
  color:
    #3e82cf;

  text-align: center;

  font-size: 13px;

  font-weight: 600;
}


/* =====================================================
   Foundation
===================================================== */

.arch-foundation-content {
  padding:
    13px 16px 10px;

  border-radius:
    18px;

  background:
    linear-gradient(
      180deg,
      #eaf4ff,
      #f9fcff
    );
}


.arch-lakehouse {
  display: block;

  width: 64%;

  margin:
    0 auto;

  padding:
    11px 20px;

  border: 0;

  border-radius:
    999px;

  background:
    linear-gradient(
      135deg,
      #1478e9,
      #0b63ce
    );

  color:
    #ffffff;

  cursor: pointer;

  box-shadow:
    0 8px 18px
    rgba(17, 104, 213, 0.18);

  transition:
    transform
    var(--transition-fast),
    box-shadow
    var(--transition-fast);
}


.arch-lakehouse:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0 12px 24px
    rgba(17, 104, 213, 0.22);
}


.arch-lakehouse small {
  color:
    rgba(255, 255, 255, 0.54);

  font-size: 6px;

  letter-spacing:
    0.8px;
}


.arch-lakehouse strong {
  display: block;

  margin-top: 3px;

  font-size: 11px;
}


.arch-lakehouse p {
  margin:
    5px 0 0;

  color:
    rgba(255, 255, 255, 0.76);

  font-size: 7px;
}


.arch-source-row {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 7px;

  margin-top: 11px;
}


.arch-source-row span {
  padding:
    7px 5px;

  border:
    1px solid
    rgba(21, 101, 216, 0.09);

  border-radius:
    9px;

  background:
    rgba(255, 255, 255, 0.90);

  color:
    var(--color-text-secondary);

  text-align: center;

  font-size: 7px;
}


/* Architecture Footer */

.architecture-foot {
  display: flex;

  align-items: center;

  gap: 7px;

  margin-top: 12px;

  padding-top: 10px;

  border-top:
    1px solid
    var(--color-border-light);
}


.architecture-foot span {
  color:
    var(--color-text-tertiary);

  font-size: 5px;

  letter-spacing:
    0.6px;
}


.architecture-foot i {
  flex: 1;

  height: 1px;

  background:
    var(--color-border);

  font-style: normal;
}


/* =====================================================
   Common Section Heading
===================================================== */

.section-heading {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  align-items: end;

  gap: 80px;

  margin-bottom: 52px;
}


.section-heading h2 {
  margin: 0;

  font-size: 38px;

  letter-spacing:
    -0.03em;
}


.section-heading
.section-description {
  margin: 0;
}


/* =====================================================
   Capability Map
===================================================== */

.capability-section {
  background:
    #ffffff;
}


.capability-map {
  display: grid;

  grid-template-columns:
    repeat(6, 1fr);

  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);
}


.capability-stage {
  min-height: 310px;

  padding:
    26px 22px;

  display: flex;

  flex-direction: column;

  border-right:
    1px solid
    var(--color-border);

  background:
    #ffffff;

  transition:
    background
    var(--transition-normal);
}


.capability-stage:last-child {
  border-right: 0;
}


.capability-stage:hover {
  background:
    #f8fbff;
}


.stage-top {
  display: flex;

  align-items: center;

  justify-content:
    space-between;
}


.stage-number {
  color:
    #b8c9df;

  font-size: 25px;

  font-weight: 600;
}


.stage-english {
  color:
    var(--color-text-tertiary);

  font-size: 9px;

  letter-spacing:
    1px;
}


.capability-stage h3 {
  margin:
    34px 0 12px;

  font-size: 18px;
}


.capability-stage > p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.75;
}


.stage-products {
  display: flex;

  flex-direction: column;

  gap: 7px;

  margin-top: auto;

  padding-top: 26px;
}


.stage-products button {
  padding:
    8px 0;

  display: flex;

  align-items: center;

  justify-content:
    space-between;

  border: 0;

  border-top:
    1px solid
    var(--color-border-light);

  background:
    transparent;

  color:
    var(--color-text-primary);

  text-align: left;

  font-size: 12px;

  cursor: pointer;
}


.stage-products button span {
  color:
    var(--color-primary);
}


/* =====================================================
   Product Family
===================================================== */

.family-section {
  background:
    var(--color-bg-light);
}


.family-list {
  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.family-item {
  display: grid;

  grid-template-columns:
    72px
    minmax(220px, 0.85fr)
    minmax(280px, 1.15fr)
    90px;

  align-items: center;

  gap: 30px;

  min-height: 150px;

  padding:
    28px 30px;

  border-bottom:
    1px solid
    var(--color-border-light);
}


.family-item:last-child {
  border-bottom: 0;
}


.family-index {
  color:
    #bed0e6;

  font-size: 28px;

  font-weight: 600;
}


.family-main > span {
  color:
    var(--color-primary);

  font-size: 10px;

  letter-spacing:
    1px;
}


.family-main h3 {
  margin:
    6px 0 8px;

  font-size: 19px;
}


.family-main p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.65;
}


.family-products {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;
}


.family-products button {
  padding:
    7px 11px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    6px;

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


.family-products button:hover {
  border-color:
    rgba(21, 101, 216, 0.3);

  color:
    var(--color-primary);

  background:
    #f5f9ff;
}


.family-count {
  color:
    var(--color-text-tertiary);

  text-align: right;

  font-size: 9px;

  letter-spacing:
    0.8px;
}


/* =====================================================
   Core Products
===================================================== */

.core-section {
  background:
    #ffffff;
}


.core-product-list {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 16px;
}


.core-product-item {
  min-height: 310px;

  padding: 26px;

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
    transform
    var(--transition-normal),
    box-shadow
    var(--transition-normal),
    border-color
    var(--transition-normal);
}


.core-product-item:hover {
  transform:
    translateY(-5px);

  border-color:
    rgba(21, 101, 216, 0.18);

  box-shadow:
    var(--shadow-card-hover);
}


.core-number {
  color:
    #c1d2e7;

  font-size: 28px;

  font-weight: 600;
}


.core-category {
  margin-top: 26px;

  color:
    var(--color-primary);

  font-size: 11px;
}


.core-product-item h3 {
  margin:
    9px 0 13px;

  min-height: 54px;

  font-size: 18px;

  line-height: 1.5;
}


.core-product-item > p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


.core-footer {
  display: flex;

  align-items: center;

  justify-content:
    space-between;

  margin-top: auto;

  padding-top: 24px;

  color:
    var(--color-primary);

  font-size: 12px;
}


.core-footer strong {
  font-size: 17px;
}


/* =====================================================
   Business Scenarios
===================================================== */

.scenario-section {
  background:
    var(--color-bg-light);
}


.business-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 18px;
}


.business-card {
  min-height: 300px;

  padding: 30px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.business-top {
  display: flex;

  align-items: center;

  justify-content:
    space-between;
}


.business-top span {
  color:
    #bdd0e7;

  font-size: 28px;

  font-weight: 600;
}


.business-top strong {
  color:
    var(--color-text-tertiary);

  font-size: 9px;

  letter-spacing:
    1px;
}


.business-card h3 {
  margin:
    42px 0 14px;

  font-size: 21px;
}


.business-card > p {
  max-width: 520px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.85;
}


.business-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 30px;
}


.business-tags span {
  padding:
    6px 10px;

  border-radius:
    6px;

  background:
    var(--color-bg-light);

  color:
    var(--color-text-secondary);

  font-size: 11px;
}


/* =====================================================
   Advantages
===================================================== */

.advantage-section {
  padding:
    92px 0;

  color:
    #ffffff;

  background:
    linear-gradient(
      135deg,
      #10233f 0%,
      #12345f 100%
    );
}


.advantage-heading {
  display: flex;

  align-items: end;

  justify-content:
    space-between;

  gap: 50px;

  margin-bottom: 52px;
}


.advantage-heading p {
  margin:
    0 0 10px;

  color:
    #78aff7;

  font-size: 11px;

  font-weight: 600;

  letter-spacing:
    1.5px;
}


.advantage-heading h2 {
  margin: 0;

  color:
    #ffffff;

  font-size: 38px;
}


.advantage-heading > span {
  max-width: 460px;

  color:
    rgba(255, 255, 255, 0.56);

  font-size: 14px;
}


.advantage-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  border-top:
    1px solid
    rgba(255, 255, 255, 0.12);

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.12);
}


.advantage-item {
  min-height: 230px;

  padding: 30px;

  border-right:
    1px solid
    rgba(255, 255, 255, 0.12);
}


.advantage-item:last-child {
  border-right: 0;
}


.advantage-item > strong {
  color:
    #75affb;

  font-size: 27px;
}


.advantage-item h3 {
  margin:
    34px 0 12px;

  color:
    #ffffff;

  font-size: 18px;
}


.advantage-item p {
  margin: 0;

  color:
    rgba(255, 255, 255, 0.56);

  font-size: 13px;

  line-height: 1.8;
}


/* =====================================================
   CTA
===================================================== */

.cta-section {
  padding:
    80px 0 100px;

  background:
    #ffffff;
}


.cta-box {
  padding: 52px;

  display: flex;

  align-items: center;

  justify-content:
    space-between;

  gap: 40px;

  border:
    1px solid
    rgba(21, 101, 216, 0.10);

  border-radius:
    var(--radius-xl);

  background:
    linear-gradient(
      135deg,
      #eef5ff,
      #f8fbff
    );
}


.cta-box p {
  margin:
    0 0 10px;

  color:
    var(--color-primary);

  font-size: 11px;

  font-weight: 600;

  letter-spacing:
    1.4px;
}


.cta-box h2 {
  margin:
    0 0 12px;

  font-size: 30px;
}


.cta-box span {
  color:
    var(--color-text-secondary);

  font-size: 14px;
}


.cta-actions {
  display: flex;

  gap: 10px;

  flex-shrink: 0;
}


/* =====================================================
   Responsive
===================================================== */

@media (max-width: 1180px) {

  .hero-inner {
    grid-template-columns:
      1fr;

    gap: 54px;
  }


  .architecture-system {
    max-width: 840px;
  }


  .capability-map {
    grid-template-columns:
      repeat(3, 1fr);
  }


  .capability-stage {
    border-bottom:
      1px solid
      var(--color-border);
  }


  .core-product-list {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .family-item {
    grid-template-columns:
      60px
      1fr
      1fr;
  }


  .family-count {
    display: none;
  }

}


@media (max-width: 800px) {

  .hero {
    min-height: auto;

    padding:
      70px 0;
  }


  .hero h1 {
    font-size: 45px;
  }


  .hero-description {
    font-size: 16px;
  }


  .hero-overview {
    flex-wrap: wrap;
  }


  .section-heading {
    grid-template-columns:
      1fr;

    gap: 18px;
  }


  .capability-map {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .family-item {
    grid-template-columns:
      50px 1fr;

    gap: 20px;
  }


  .family-products {
    grid-column: 2;
  }


  .business-grid {
    grid-template-columns:
      1fr;
  }


  .advantage-heading {
    align-items:
      flex-start;

    flex-direction:
      column;
  }


  .advantage-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .advantage-item:nth-child(2) {
    border-right: 0;
  }


  .cta-box {
    align-items:
      flex-start;

    flex-direction:
      column;
  }

}


@media (max-width: 620px) {

  .hero h1 {
    font-size: 38px;
  }


  .overview-line {
    display: none;
  }


  .hero-overview {
    gap:
      18px 28px;
  }


  /* Product architecture */

  .architecture-system {
    padding: 18px;
  }


  .architecture-head {
    align-items:
      flex-start;

    flex-direction:
      column;

    gap: 6px;
  }


  .arch-layer {
    grid-template-columns:
      1fr;
  }


  .arch-layer-label {
    flex-direction: row;

    align-items: center;

    gap: 6px;

    padding:
      0 0 6px;

    border-right: 0;

    border-bottom:
      1px solid
      var(--color-border-light);
  }


  .arch-app-grid {
    grid-template-columns:
      1fr;

    border-radius:
      14px;
  }


  .arch-circulation-content {
    grid-template-columns:
      1fr;

    border-radius:
      14px;
  }


  .arch-role-arrow {
    transform:
      rotate(90deg);
  }


  .arch-processing-grid {
    grid-template-columns:
      1fr;

    border-radius:
      14px;
  }


  .arch-link {
    transform:
      rotate(90deg);
  }


  .arch-flow {
    padding-left: 0;
  }


  .arch-foundation-content {
    border-radius:
      14px;
  }


  .arch-lakehouse {
    width: 100%;
  }


  .arch-source-row {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .architecture-foot {
    display: none;
  }


  /* Other */

  .capability-map,
  .core-product-list,
  .advantage-grid {
    grid-template-columns:
      1fr;
  }


  .capability-stage {
    border-right: 0;
  }


  .family-item {
    grid-template-columns:
      1fr;

    padding: 24px;
  }


  .family-products {
    grid-column: auto;
  }


  .business-card {
    min-height: auto;
  }


  .advantage-item {
    border-right: 0;

    border-bottom:
      1px solid
      rgba(255, 255, 255, 0.12);
  }


  .advantage-item:last-child {
    border-bottom: 0;
  }


  .cta-actions {
    flex-direction: column;

    align-items:
      flex-start;
  }

}
</style>