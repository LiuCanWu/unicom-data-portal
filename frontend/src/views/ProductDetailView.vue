<template>
  <main class="product-detail-page">

    <!-- 产品存在 -->
    <template v-if="product">

      <!-- 01 产品首屏 -->
      <ProductHero
        :product="product"
        :category-name="categoryName"
        @experience="handleExperience"
        @trial="handleTrial"
      />


      <!-- 02 产品价值 -->
      <section class="page-section">
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
              v-for="value in product.values"
              :key="value.title"
              class="value-card"
            >
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
        class="metrics-section"
      >
        <div class="page-container">

          <ProductSectionTitle
            eyebrow="KEY METRICS"
            title="关键指标"
            description="通过规模、效率与能力指标，直观展现产品建设与应用成效。"
          />


          <div class="metrics-grid">

            <article
              v-for="metric in product.metrics"
              :key="
                `${metric.value}-${metric.label}`
              "
              class="metric-card"
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
      <section class="page-section">
        <div class="page-container">

          <ProductSectionTitle
            eyebrow="ARCHITECTURE"
            title="产品架构"
            description="通过统一架构组织产品能力，并与上下游平台形成协同。"
          />


          <div class="architecture-box">

            <img
              v-if="product.architectureImage"
              :src="product.architectureImage"
              :alt="`${product.name}产品架构`"
              class="architecture-image"
            />


            <div
              v-else
              class="architecture-placeholder"
            >
              <span>
                PRODUCT ARCHITECTURE
              </span>

              <strong>
                {{ product.name }}
              </strong>

              <p>
                {{
                  product.architectureDescription ||
                  '产品架构图将在后续产品内容接入阶段补充。'
                }}
              </p>
            </div>

          </div>

        </div>
      </section>


      <!-- 06 典型场景 -->
      <section class="page-section scenario-section">
        <div class="page-container">

          <ProductSectionTitle
            eyebrow="SCENARIOS"
            title="典型应用场景"
            description="围绕不同业务角色和行业场景，发挥产品能力价值。"
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
            description="持续沉淀企业级数据平台技术与产品实践。"
          />


          <div
            v-if="
              product.advantages &&
              product.advantages.length > 0
            "
            class="advantage-grid"
          >
            <article
              v-for="advantage in product.advantages"
              :key="advantage.title"
              class="advantage-card"
            >
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
              <h3>
                企业级
              </h3>

              <p>
                面向复杂组织和大规模数据应用场景进行产品设计。
              </p>
            </article>


            <article class="advantage-card">
              <h3>
                一体化
              </h3>

              <p>
                与数据中台上下游产品协同，形成完整数据能力链路。
              </p>
            </article>


            <article class="advantage-card">
              <h3>
                可扩展
              </h3>

              <p>
                采用模块化能力设计，支持后续持续升级和扩展。
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
            description="结合实际建设与应用场景，展现产品落地路径与业务价值。"
          />


          <div class="case-grid">

            <article
              v-for="(caseItem, index) in product.cases"
              :key="caseItem.title"
              class="case-card"
            >

              <div class="case-number">
                0{{ index + 1 }}
              </div>


              <div class="case-content">

                <h3>
                  {{ caseItem.title }}
                </h3>


                <p class="case-description">
                  {{ caseItem.description }}
                </p>


                <div
                  v-if="caseItem.result"
                  class="case-result"
                >
                  <span>
                    应用成效
                  </span>

                  <p>
                    {{ caseItem.result }}
                  </p>
                </div>

              </div>

            </article>

          </div>

        </div>
      </section>


      <!-- 09 Demo / 体验 -->
      <section class="page-section demo-section">
        <div class="page-container">

          <ProductSectionTitle
            eyebrow="DEMO"
            title="产品体验"
            description="通过 Demo、演示视频或独立试用环境快速了解产品能力。"
          />


          <div class="demo-box">

            <div class="demo-content">
              <span class="demo-label">
                PRODUCT DEMO
              </span>

              <h3>
                {{ product.name }}
              </h3>

              <p>
                当前门户负责产品介绍和体验入口，
                具体产品能力由独立产品环境提供。
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
                查看产品 Demo 或申请进入独立试用环境。
              </span>
            </div>


            <el-button
              type="primary"
              size="large"
              @click="handleTrial"
            >
              申请试用
            </el-button>

          </div>

        </div>
      </section>

    </template>


    <!-- 产品不存在 -->
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
          @click="router.push('/products')"
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

  const family =
    productFamilies.find(
      item =>
        item.id ===
        product.value?.category,
    )

  return family?.name || ''
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
  background: #ffffff;
}


/* 产品价值 */

.value-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


.value-card {
  min-height: 180px;

  padding: 28px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background: #ffffff;
}


.value-card h3 {
  margin:
    0 0 12px;

  font-size: 18px;
}


.value-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


.product-description {
  max-width: 960px;

  padding: 34px;

  border-left:
    3px solid
    var(--color-primary);

  background:
    #f7faff;

  color:
    var(--color-text-secondary);

  font-size: 17px;

  line-height: 1.95;
}


/* 核心能力 */

.feature-section {
  background:
    var(--color-bg-light);
}


/* 关键指标 */

.metrics-section {
  padding:
    80px 0;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #0d2343,
      #123b70
    );
}


.metrics-section
:deep(.section-title .eyebrow) {
  color: #7cb3ff;
}


.metrics-section
:deep(.section-title h2) {
  color: #ffffff;
}


.metrics-section
:deep(.section-title .description) {
  color:
    rgba(255, 255, 255, 0.64);
}


.metrics-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}


.metric-card {
  min-height: 170px;

  padding:
    28px 24px;

  border:
    1px solid
    rgba(255, 255, 255, 0.12);

  border-radius:
    var(--radius-lg);

  background:
    rgba(255, 255, 255, 0.05);
}


.metric-card strong {
  display: block;

  color:
    #ffffff;

  font-size: 34px;

  line-height: 1.2;
}


.metric-card h3 {
  margin:
    14px 0 0;

  color:
    rgba(255, 255, 255, 0.9);

  font-size: 15px;

  font-weight: 500;
}


.metric-card p {
  margin:
    12px 0 0;

  color:
    rgba(255, 255, 255, 0.58);

  font-size: 13px;

  line-height: 1.7;
}


/* 产品架构 */

.architecture-box {
  min-height: 360px;
}


.architecture-image {
  display: block;

  width: 100%;

  border-radius:
    var(--radius-lg);
}


.architecture-placeholder {
  min-height: 360px;

  padding: 48px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  border:
    1px dashed
    rgba(
      22,
      119,
      255,
      0.3
    );

  border-radius:
    var(--radius-lg);

  background:
    linear-gradient(
      135deg,
      #f6faff,
      #eef5ff
    );
}


.architecture-placeholder span {
  margin-bottom: 20px;

  color:
    var(--color-primary);

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 1px;
}


.architecture-placeholder strong {
  font-size: 30px;
}


.architecture-placeholder p {
  max-width: 760px;

  margin:
    18px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 15px;

  line-height: 1.8;
}


/* 场景 */

.scenario-section {
  background: #ffffff;
}


/* 产品优势 */

.advantage-section {
  background:
    var(--color-bg-light);
}


.advantage-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;
}


.advantage-card {
  min-height: 170px;

  padding: 28px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background: #ffffff;
}


.advantage-card h3 {
  margin:
    0 0 12px;

  font-size: 18px;
}


.advantage-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


/* 典型案例 */

.case-section {
  background: #ffffff;
}


.case-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 20px;
}


.case-card {
  min-height: 280px;

  padding: 30px;

  display: flex;

  gap: 24px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    linear-gradient(
      180deg,
      #ffffff,
      #fbfcfe
    );

  transition:
    transform 0.25s,
    box-shadow 0.25s;
}


.case-card:hover {
  transform:
    translateY(-4px);

  box-shadow:
    var(--shadow-card);
}


.case-number {
  flex-shrink: 0;

  color:
    #c4d5ea;

  font-size: 32px;

  font-weight: 600;
}


.case-content {
  flex: 1;
}


.case-content h3 {
  margin:
    3px 0 14px;

  font-size: 20px;

  line-height: 1.45;
}


.case-description {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.85;
}


.case-result {
  margin-top: 22px;

  padding:
    16px 18px;

  border-radius:
    var(--radius-md);

  background:
    #f2f7ff;
}


.case-result span {
  display: block;

  margin-bottom: 7px;

  color:
    var(--color-primary);

  font-size: 12px;

  font-weight: 600;
}


.case-result p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.7;
}


/* Demo */

.demo-section {
  background:
    var(--color-bg-light);
}


.demo-box {
  padding: 42px;

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
    #ffffff;
}


.demo-label {
  color:
    var(--color-primary);

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 1px;
}


.demo-content h3 {
  margin:
    12px 0 12px;

  font-size: 24px;
}


.demo-content p {
  max-width: 680px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


.demo-actions {
  display: flex;

  gap: 12px;

  flex-shrink: 0;
}


/* CTA */

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

  gap: 30px;

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


/* Responsive */

@media (max-width: 1000px) {
  .metrics-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .advantage-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}


@media (max-width: 900px) {
  .value-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .case-grid {
    grid-template-columns: 1fr;
  }


  .demo-box,
  .cta-box {
    flex-direction: column;

    align-items: flex-start;
  }
}


@media (max-width: 600px) {
  .value-grid,
  .metrics-grid,
  .advantage-grid {
    grid-template-columns: 1fr;
  }


  .case-card {
    flex-direction: column;
  }


  .demo-actions {
    flex-direction: column;
  }
}
</style>