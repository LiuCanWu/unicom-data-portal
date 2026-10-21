<template>
  <main class="product-detail-page">

    <template v-if="product">

      <!-- 01 Hero -->
      <ProductHero
        :product="product"
        :category-name="categoryName"
        @experience="handleExperience"
        @trial="handleTrial"
      />


      <!-- 02 产品价值 -->
      <section class="page-section value-section">

        <div class="page-container">

          <ProductSectionTitle
            eyebrow="PRODUCT VALUE"
            title="产品价值"
            description="围绕企业数据建设与应用场景，持续释放数据资产价值。"
          />


          <div
            v-if="
              product.values &&
              product.values.length > 0
            "
            class="value-grid"
          >

            <article
              v-for="(value, index) in product.values"
              :key="value.title"
              class="value-card"
            >

              <span>
                0{{ index + 1 }}
              </span>

              <h3>
                {{ value.title }}
              </h3>

              <p>
                {{ value.description }}
              </p>

            </article>

          </div>


          <div
            v-else
            class="product-description"
          >
            {{ product.description }}
          </div>

        </div>

      </section>


      <!-- 03 核心能力 -->
      <section class="page-section feature-section">

        <div class="page-container">

          <ProductSectionTitle
            eyebrow="CORE CAPABILITIES"
            title="核心能力"
            description="围绕产品核心定位，形成可复用、可组合的数据能力体系。"
          />


          <ProductFeatureGrid
            :features="product.features"
          />

        </div>

      </section>


      <!-- 04 关键指标 -->
      <section
        v-if="
          product.metrics &&
          product.metrics.length > 0
        "
        class="metric-section"
      >

        <div class="page-container">

          <div class="metric-heading">

            <div>
              <p>
                KEY METRICS
              </p>

              <h2>
                关键指标
              </h2>
            </div>

            <span>
              以规模、效率和能力指标，
              展现产品建设及应用成效。
            </span>

          </div>


          <div class="metric-grid">

            <article
              v-for="metric in product.metrics"
              :key="
                `${metric.value}-${metric.label}`
              "
              class="metric-item"
            >

              <strong>
                {{ metric.value }}
              </strong>

              <h3>
                {{ metric.label }}
              </h3>

              <p
                v-if="metric.description"
              >
                {{ metric.description }}
              </p>

            </article>

          </div>

        </div>

      </section>


      <!-- 05 产品架构 -->
      <section class="page-section architecture-section">

        <div class="page-container">

          <ProductSectionTitle
            eyebrow="ARCHITECTURE"
            title="产品架构"
            description="通过统一架构组织核心能力，并与上下游数据平台和业务应用形成协同。"
          />


          <div
            class="architecture-panel"
            :class="{ 'has-image': product.architectureImage }"
          >

            <el-image
              v-if="product.architectureImage"
              :src="product.architectureImage"
              :alt="`${product.name}产品架构`"
              :preview-src-list="[product.architectureImage]"
              :preview-teleported="true"
              fit="contain"
              class="architecture-image"
              :class="{ 'data-agent-architecture': product.slug === 'data-agent' }"
            />

            <p v-if="product.architectureImage" class="architecture-image-hint">
              点击图片查看大图
            </p>


            <div
              v-if="!product.architectureImage"
              class="architecture-content"
            >

              <div class="architecture-main">

                <small>
                  PRODUCT ARCHITECTURE
                </small>

                <h3>
                  {{ product.name }}
                </h3>

                <p>
                  {{
                    product.architectureDescription ||
                    product.description
                  }}
                </p>

              </div>


              <div class="architecture-flow">

                <div class="architecture-node">
                  <span>
                    01
                  </span>

                  <strong>
                    数据基础
                  </strong>
                </div>


                <i>
                  →
                </i>


                <div class="architecture-node active">
                  <span>
                    02
                  </span>

                  <strong>
                    核心能力
                  </strong>
                </div>


                <i>
                  →
                </i>


                <div class="architecture-node">
                  <span>
                    03
                  </span>

                  <strong>
                    产品服务
                  </strong>
                </div>


                <i>
                  →
                </i>


                <div class="architecture-node">
                  <span>
                    04
                  </span>

                  <strong>
                    业务应用
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- 06 场景 -->
      <section class="page-section scenario-section">

        <div class="page-container">

          <ProductSectionTitle
            eyebrow="SCENARIOS"
            title="典型应用场景"
            description="围绕真实业务角色和使用场景，发挥产品能力价值。"
          />


          <ProductScenarioGrid
            :scenarios="product.scenarios"
          />

        </div>

      </section>


      <!-- 07 产品优势 -->
      <section class="page-section advantage-section">

        <div class="page-container">

          <ProductSectionTitle
            eyebrow="ADVANTAGES"
            title="产品优势"
            description="持续沉淀企业级数据平台建设与规模化实践能力。"
          />


          <div
            v-if="
              product.advantages &&
              product.advantages.length > 0
            "
            class="advantage-grid"
          >

            <article
              v-for="(advantage, index) in product.advantages"
              :key="advantage.title"
              class="advantage-card"
            >

              <span>
                0{{ index + 1 }}
              </span>

              <h3>
                {{ advantage.title }}
              </h3>

              <p>
                {{ advantage.description }}
              </p>

            </article>

          </div>


          <div
            v-else
            class="advantage-grid"
          >

            <article class="advantage-card">
              <span>01</span>

              <h3>
                企业级
              </h3>

              <p>
                面向复杂组织和大规模数据应用场景进行产品设计。
              </p>
            </article>


            <article class="advantage-card">
              <span>02</span>

              <h3>
                一体化
              </h3>

              <p>
                与数据中台上下游产品协同，形成完整数据能力链路。
              </p>
            </article>


            <article class="advantage-card">
              <span>03</span>

              <h3>
                可扩展
              </h3>

              <p>
                采用模块化能力设计，支持持续升级和扩展。
              </p>
            </article>

          </div>

        </div>

      </section>


      <!-- 08 典型案例 -->
      <section
        v-if="
          product.cases &&
          product.cases.length > 0
        "
        class="page-section case-section"
      >

        <div class="page-container">

          <ProductSectionTitle
            eyebrow="CASES"
            title="典型案例"
            description="结合实际建设与业务场景，展现产品落地路径和应用成效。"
          />


          <div class="case-list">

            <article
              v-for="(caseItem, index) in product.cases"
              :key="caseItem.title"
              class="case-item"
            >

              <div class="case-index">
                0{{ index + 1 }}
              </div>


              <div class="case-main">

                <span>
                  APPLICATION CASE
                </span>

                <h3>
                  {{ caseItem.title }}
                </h3>

                <p>
                  {{ caseItem.description }}
                </p>

              </div>


              <div
                v-if="caseItem.result"
                class="case-result"
              >

                <small>
                  应用成效
                </small>

                <strong>
                  {{ caseItem.result }}
                </strong>

              </div>

            </article>

          </div>

        </div>

      </section>


      <!-- 09 产品体验 -->
      <section class="page-section demo-section">

        <div class="page-container">

          <ProductSectionTitle
            eyebrow="PRODUCT EXPERIENCE"
            title="产品体验"
            description="通过 Demo、视频或独立试用环境快速了解产品能力。"
          />


          <div class="demo-panel">

            <div class="demo-copy">

              <span>
                EXPERIENCE
              </span>

              <h3>
                {{ product.name }}
              </h3>

              <p>
                当前门户提供统一产品介绍和体验入口，
                实际产品能力由各独立产品环境承载。
              </p>

            </div>


            <div class="demo-actions">

              <el-button
                type="primary"
                size="large"
                @click="handleExperience"
              >
                在线体验
              </el-button>


              <el-button
                size="large"
                @click="handleTrial"
              >
                申请试用
              </el-button>

            </div>

          </div>

        </div>

      </section>


      <!-- 10 CTA -->
      <section class="cta-section">

        <div class="page-container">

          <div class="cta-box">

            <div>

              <p>
                GET STARTED
              </p>

              <h2>
                开始体验 {{ product.name }}
              </h2>

              <span>
                深入了解产品能力，
                或进入独立产品环境进行体验。
              </span>

            </div>


            <el-button
              type="primary"
              size="large"
              @click="handleExperience"
            >
              查看体验入口
            </el-button>

          </div>

        </div>

      </section>

    </template>


    <!-- 404 -->
    <section
      v-else
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
          @click="
            router.push(
              '/products'
            )
          "
        >
          返回产品中心
        </el-button>

      </div>

    </section>

  </main>
</template>


<script setup lang="ts">
import {
  computed,
} from 'vue'

import {
  ElMessage,
} from 'element-plus'

import {
  useRoute,
  useRouter,
} from 'vue-router'

import ProductHero
  from '../components/product/ProductHero.vue'

import ProductFeatureGrid
  from '../components/product/ProductFeatureGrid.vue'

import ProductScenarioGrid
  from '../components/product/ProductScenarioGrid.vue'

import ProductSectionTitle
  from '../components/product/ProductSectionTitle.vue'

import {
  getProductBySlug,
} from '../data/products'

import {
  productFamilies,
} from '../data/productFamilies'


const route =
  useRoute()


const router =
  useRouter()


const product =
  computed(() => {

    const slug =
      String(
        route.params.slug ||
        '',
      )


    return getProductBySlug(
      slug,
    )
  })


const categoryName =
  computed(() => {

    if (!product.value) {
      return ''
    }


    const family =
      productFamilies.find(
        item =>
          item.id ===
          product.value?.category,
      )


    return (
      family?.name ||
      ''
    )
  })


function handleExperience() {

  if (!product.value) {
    return
  }


  const demoLink =
    product.value.demoLink


  if (
    demoLink?.enabled &&
    demoLink.url
  ) {

    window.open(
      demoLink.url,
      '_blank',
    )

    return
  }


  ElMessage.info(
    '当前产品体验环境正在逐步接入，敬请期待。',
  )
}


function handleTrial() {

  if (!product.value) {
    return
  }


  const trialLink =
    product.value.trialLink


  if (
    trialLink?.enabled &&
    trialLink.url
  ) {

    window.open(
      trialLink.url,
      '_blank',
    )

    return
  }


  ElMessage.info(
    '试用申请功能将在后续版本开放。',
  )
}
</script>


<style scoped>
.product-detail-page {
  background:
    #ffffff;
}


/* =====================================================
   产品价值
===================================================== */

.value-section {
  background:
    #ffffff;
}


.value-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 18px;
}


.value-card {
  min-height: 190px;

  padding: 28px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.value-card > span {
  color:
    #bfd0e4;

  font-size: 24px;

  font-weight: 600;
}


.value-card h3 {
  margin:
    28px 0 11px;

  font-size: 18px;
}


.value-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


.product-description {
  max-width: 980px;

  padding:
    34px 36px;

  border-left:
    3px solid
    var(--color-primary);

  background:
    linear-gradient(
      90deg,
      #f3f8ff,
      #ffffff
    );

  color:
    var(--color-text-secondary);

  font-size: 16px;

  line-height: 1.95;
}


/* =====================================================
   核心能力
===================================================== */

.feature-section {
  background:
    var(--color-bg-light);
}


/* =====================================================
   Metrics
===================================================== */

.metric-section {
  padding:
    90px 0;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #10233f 0%,
      #153b68 100%
    );
}


.metric-heading {
  display: flex;

  align-items: flex-end;

  justify-content:
    space-between;

  gap: 40px;

  margin-bottom: 46px;
}


.metric-heading p {
  margin:
    0 0 9px;

  color:
    #78acf1;

  font-size: 10px;

  letter-spacing:
    1.4px;
}


.metric-heading h2 {
  margin: 0;

  color: #ffffff;

  font-size: 35px;
}


.metric-heading > span {
  max-width: 430px;

  color:
    rgba(
      255,
      255,
      255,
      0.55
    );

  font-size: 13px;
}


.metric-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  border-top:
    1px solid
    rgba(
      255,
      255,
      255,
      0.12
    );

  border-bottom:
    1px solid
    rgba(
      255,
      255,
      255,
      0.12
    );
}


.metric-item {
  min-height: 190px;

  padding: 30px;

  border-right:
    1px solid
    rgba(
      255,
      255,
      255,
      0.12
    );
}


.metric-item:last-child {
  border-right: 0;
}


.metric-item strong {
  display: block;

  color: #ffffff;

  font-size: 36px;

  font-weight: 600;
}


.metric-item h3 {
  margin:
    14px 0 0;

  color:
    rgba(
      255,
      255,
      255,
      0.88
    );

  font-size: 14px;
}


.metric-item p {
  margin:
    10px 0 0;

  color:
    rgba(
      255,
      255,
      255,
      0.52
    );

  font-size: 11px;

  line-height: 1.7;
}


/* =====================================================
   Architecture
===================================================== */

.architecture-section {
  background:
    #ffffff;
}


.architecture-panel {
  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-xl);

  background:
    linear-gradient(
      135deg,
      #f7faff,
      #ffffff
    );
}


.architecture-image {
  display: block;

  width: 100%;

  max-width: 100%;

  margin: 0 auto;

  cursor: zoom-in;
}

.architecture-image.data-agent-architecture {
  width: 50%;
}

.architecture-panel.has-image {
  padding: 20px 20px 12px;

  background: #ffffff;
}

.architecture-image :deep(.el-image__inner) {
  display: block;

  width: 100%;

  height: auto;
}

.architecture-image-hint {
  margin: 12px 0 0;

  color: var(--color-text-secondary);

  font-size: 12px;

  text-align: center;
}


.architecture-content {
  padding:
    46px;
}


.architecture-main {
  max-width: 860px;
}


.architecture-main small {
  color:
    var(--color-primary);

  font-size: 9px;

  letter-spacing:
    1.2px;
}


.architecture-main h3 {
  margin:
    8px 0 14px;

  font-size: 28px;
}


.architecture-main p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.9;
}


.architecture-flow {
  display: grid;

  grid-template-columns:
    1fr
    24px
    1fr
    24px
    1fr
    24px
    1fr;

  align-items: center;

  gap: 8px;

  margin-top: 42px;
}


.architecture-node {
  padding:
    20px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    12px;

  background:
    #ffffff;
}


.architecture-node.active {
  border-color:
    rgba(
      21,
      101,
      216,
      0.20
    );

  background:
    #eef5ff;
}


.architecture-node span {
  color:
    #bfd0e4;

  font-size: 14px;
}


.architecture-node strong {
  display: block;

  margin-top: 8px;

  color:
    var(--color-text-primary);

  font-size: 13px;
}


.architecture-flow i {
  color:
    #85a7ce;

  text-align: center;

  font-style: normal;
}


/* =====================================================
   Scenario
===================================================== */

.scenario-section {
  background:
    var(--color-bg-light);
}


/* =====================================================
   Advantage
===================================================== */

.advantage-section {
  background:
    #ffffff;
}


.advantage-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}


.advantage-card {
  min-height: 190px;

  padding: 28px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.advantage-card > span {
  color:
    #bfd0e4;

  font-size: 22px;

  font-weight: 600;
}


.advantage-card h3 {
  margin:
    27px 0 11px;

  font-size: 18px;
}


.advantage-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


/* =====================================================
   Case
===================================================== */

.case-section {
  background:
    var(--color-bg-light);
}


.case-list {
  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.case-item {
  display: grid;

  grid-template-columns:
    58px
    minmax(280px, 1.15fr)
    minmax(240px, 0.85fr);

  align-items: center;

  gap: 30px;

  min-height: 190px;

  padding:
    30px;

  border-bottom:
    1px solid
    var(--color-border-light);
}


.case-item:last-child {
  border-bottom: 0;
}


.case-index {
  color:
    #bfd0e4;

  font-size: 25px;

  font-weight: 600;
}


.case-main > span {
  color:
    var(--color-primary);

  font-size: 8px;

  letter-spacing:
    0.9px;
}


.case-main h3 {
  margin:
    7px 0 10px;

  font-size: 19px;
}


.case-main p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


.case-result {
  padding:
    20px 22px;

  border-radius:
    12px;

  background:
    #f2f7ff;
}


.case-result small {
  color:
    var(--color-primary);

  font-size: 9px;
}


.case-result strong {
  display: block;

  margin-top: 8px;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  font-weight: 500;

  line-height: 1.75;
}


/* =====================================================
   Demo
===================================================== */

.demo-section {
  background:
    #ffffff;
}


.demo-panel {
  padding:
    40px 42px;

  display: flex;

  align-items: center;

  justify-content:
    space-between;

  gap: 40px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    linear-gradient(
      135deg,
      #f7faff,
      #ffffff
    );
}


.demo-copy > span {
  color:
    var(--color-primary);

  font-size: 9px;

  letter-spacing:
    1.1px;
}


.demo-copy h3 {
  margin:
    8px 0 10px;

  font-size: 23px;
}


.demo-copy p {
  max-width: 650px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


.demo-actions {
  display: flex;

  gap: 10px;

  flex-shrink: 0;
}


/* =====================================================
   CTA
===================================================== */

.cta-section {
  padding:
    40px 0 100px;
}


.cta-box {
  padding: 52px;

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
      #eef5ff,
      #f8fbff
    );
}


.cta-box p {
  margin:
    0 0 9px;

  color:
    var(--color-primary);

  font-size: 10px;

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


/* 404 */

.not-found {
  min-height: 620px;

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


/* =====================================================
   Responsive
===================================================== */

@media (max-width: 1000px) {
  .metric-grid,
  .advantage-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .metric-item:nth-child(2),
  .advantage-card:nth-child(2) {
    border-right: 0;
  }


  .architecture-flow {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .architecture-flow i {
    display: none;
  }


  .case-item {
    grid-template-columns:
      50px 1fr;
  }


  .case-result {
    grid-column:
      2;
  }
}


@media (max-width: 760px) {
  .architecture-image.data-agent-architecture {
    width: 100%;
  }

  .value-grid,
  .metric-grid,
  .advantage-grid {
    grid-template-columns:
      1fr;
  }


  .metric-heading {
    align-items:
      flex-start;

    flex-direction:
      column;
  }


  .metric-item {
    border-right: 0;

    border-bottom:
      1px solid
      rgba(
        255,
        255,
        255,
        0.12
      );
  }


  .metric-item:last-child {
    border-bottom: 0;
  }


  .architecture-content {
    padding: 30px;
  }


  .architecture-flow {
    grid-template-columns:
      1fr;
  }


  .case-item {
    grid-template-columns:
      1fr;

    gap: 16px;
  }


  .case-result {
    grid-column: auto;
  }


  .demo-panel,
  .cta-box {
    align-items:
      flex-start;

    flex-direction:
      column;
  }
}
</style>
