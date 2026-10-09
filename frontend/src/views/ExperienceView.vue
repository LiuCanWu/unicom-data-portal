<template>
  <main class="experience-page">

    <!-- =====================================================
         01 Hero
    ====================================================== -->
    <PageHero
      eyebrow="EXPERIENCE CENTER"
      title="数据智能产品体验中心"
      description="通过产品演示、视频讲解与独立试用环境，快速了解产品能力、业务场景与实际应用价值。"
    />


    <!-- =====================================================
         02 体验方式
    ====================================================== -->
    <section class="experience-mode-section">

      <div class="page-container">

        <div class="section-heading">

          <div>
            <p class="section-eyebrow">
              EXPERIENCE MODE
            </p>

            <h2>
              从了解产品到深入体验
            </h2>
          </div>

          <p class="section-description">
            根据不同产品成熟度，
            逐步提供轻量演示、视频介绍与真实产品环境。
          </p>

        </div>


        <div class="mode-grid">

          <article
            v-for="mode in experienceModes"
            :key="mode.number"
            class="mode-card"
          >

            <div class="mode-number">
              {{ mode.number }}
            </div>

            <small>
              {{ mode.english }}
            </small>

            <h3>
              {{ mode.title }}
            </h3>

            <p>
              {{ mode.description }}
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         03 重点体验
    ====================================================== -->
    <section class="featured-section">

      <div class="page-container">

        <div class="section-heading">

          <div>
            <p class="section-eyebrow">
              FEATURED EXPERIENCE
            </p>

            <h2>
              重点产品体验
            </h2>
          </div>

          <p class="section-description">
            优先呈现数据智能产品家族中的核心产品能力与典型使用路径。
          </p>

        </div>


        <div class="featured-grid">

          <article
            v-for="(item, index) in featuredExperiences"
            :key="item.id"
            class="featured-card"
          >

            <div class="featured-card-head">

              <span class="featured-index">
                {{
                  formatNumber(
                    index + 1
                  )
                }}
              </span>


              <span
                class="status"
                :class="item.status"
              >
                {{
                  getStatusName(
                    item.status
                  )
                }}
              </span>

            </div>


            <div class="featured-content">

              <small>
                {{
                  getTypeName(
                    item.type
                  )
                }}
              </small>

              <h3>
                {{ item.title }}
              </h3>

              <p>
                {{ item.description }}
              </p>


              <div class="featured-tags">

                <span
                  v-for="tag in item.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span>

              </div>

            </div>


            <div class="featured-footer">

              <button
                type="button"
                @click="
                  handleExperience(
                    item
                  )
                "
              >
                {{
                  item.status ===
                  'available'
                    ? '进入体验'
                    : '查看产品'
                }}

                <span>
                  →
                </span>
              </button>


              <button
                type="button"
                class="secondary-link"
                @click="
                  goProduct(
                    item.productId
                  )
                "
              >
                产品详情
              </button>

            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         04 全部资源
    ====================================================== -->
    <section class="resource-section">

      <div class="page-container">

        <div class="resource-toolbar">

          <div>

            <p class="section-eyebrow">
              ALL EXPERIENCE
            </p>

            <h2>
              全部体验资源
            </h2>

            <p>
              共
              <strong>
                {{ filteredExperiences.length }}
              </strong>
              项资源
            </p>

          </div>


          <div class="filter-tabs">

            <button
              type="button"
              :class="{
                active:
                  selectedType === 'all'
              }"
              @click="
                selectedType = 'all'
              "
            >
              全部
            </button>

            <button
              type="button"
              :class="{
                active:
                  selectedType === 'demo'
              }"
              @click="
                selectedType = 'demo'
              "
            >
              产品演示
            </button>

            <button
              type="button"
              :class="{
                active:
                  selectedType === 'video'
              }"
              @click="
                selectedType = 'video'
              "
            >
              视频讲解
            </button>

            <button
              type="button"
              :class="{
                active:
                  selectedType === 'trial'
              }"
              @click="
                selectedType = 'trial'
              "
            >
              独立试用
            </button>

          </div>

        </div>


        <div
          v-if="
            filteredExperiences.length > 0
          "
          class="resource-list"
        >

          <article
            v-for="(item, index) in filteredExperiences"
            :key="item.id"
            class="resource-item"
          >

            <div class="resource-index">
              {{
                formatNumber(
                  index + 1
                )
              }}
            </div>


            <div class="resource-main">

              <span>
                {{
                  getTypeName(
                    item.type
                  )
                }}
              </span>

              <h3>
                {{ item.title }}
              </h3>

              <p>
                {{ item.description }}
              </p>

            </div>


            <div class="resource-tags">

              <span
                v-for="tag in item.tags"
                :key="tag"
              >
                {{ tag }}
              </span>

            </div>


            <div class="resource-action">

              <span
                class="status"
                :class="item.status"
              >
                {{
                  getStatusName(
                    item.status
                  )
                }}
              </span>


              <button
                type="button"
                @click="
                  handleExperience(
                    item
                  )
                "
              >
                {{
                  item.status ===
                  'available'
                    ? '进入体验'
                    : '查看产品'
                }}

                →
              </button>

            </div>

          </article>

        </div>


        <div
          v-else
          class="empty-state"
        >
          <span>
            EXPERIENCE RESOURCE
          </span>

          <strong>
            当前暂无该类型体验资源
          </strong>

          <p>
            后续将根据产品建设情况持续开放。
          </p>
        </div>

      </div>

    </section>


    <!-- =====================================================
         05 体验流程
    ====================================================== -->
    <section class="process-section">

      <div class="page-container">

        <div class="process-heading">

          <div>
            <p>
              HOW TO START
            </p>

            <h2>
              四步完成产品体验
            </h2>
          </div>

          <span>
            保持简单清晰的体验路径，
            从产品了解逐步进入真实环境。
          </span>

        </div>


        <div class="process-grid">

          <article
            v-for="step in processSteps"
            :key="step.number"
            class="process-item"
          >
            <span>
              {{ step.number }}
            </span>

            <h3>
              {{ step.title }}
            </h3>

            <p>
              {{ step.description }}
            </p>
          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         06 CTA
    ====================================================== -->
    <section class="cta-section">

      <div class="page-container">

        <div class="cta-box">

          <div>
            <p>
              EXPLORE PRODUCTS
            </p>

            <h2>
              先了解产品，再选择合适的体验方式
            </h2>

            <span>
              浏览完整产品体系，
              查看产品定位、核心能力和典型场景。
            </span>
          </div>


          <el-button
            type="primary"
            size="large"
            @click="
              router.push(
                '/products'
              )
            "
          >
            浏览全部产品
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
  getExperiences,
  getFeaturedExperiences,
} from '../data/experiences'

import {
  products,
} from '../data/products'

import type {
  ExperienceItem,
  ExperienceType,
} from '../types/experience'


const router =
  useRouter()


type ExperienceFilter =
  | ExperienceType
  | 'all'


const selectedType =
  ref<ExperienceFilter>('all')


const allExperiences =
  getExperiences()


const featuredExperiences =
  getFeaturedExperiences()


const filteredExperiences =
  computed(() => {

    if (
      selectedType.value ===
      'all'
    ) {
      return allExperiences
    }


    return allExperiences.filter(
      item =>
        item.type ===
        selectedType.value,
    )
  })


const experienceModes = [
  {
    number: '01',

    english:
      'PRODUCT DEMO',

    title:
      '产品演示',

    description:
      '通过预置场景快速了解产品核心能力和主要操作路径。',
  },

  {
    number: '02',

    english:
      'VIDEO',

    title:
      '视频讲解',

    description:
      '通过产品介绍和操作视频快速理解产品定位与业务价值。',
  },

  {
    number: '03',

    english:
      'TRIAL',

    title:
      '独立试用',

    description:
      '进入真实产品环境，自主验证产品功能与业务适配情况。',
  },
]


const processSteps = [
  {
    number: '01',
    title: '选择产品',
    description:
      '根据业务需求找到需要了解的数据智能产品。',
  },
  {
    number: '02',
    title: '查看演示',
    description:
      '通过Demo或视频快速了解核心产品能力。',
  },
  {
    number: '03',
    title: '申请试用',
    description:
      '对于需要深入验证的产品申请独立体验环境。',
  },
  {
    number: '04',
    title: '深入体验',
    description:
      '进入真实产品环境验证业务场景与产品能力。',
  },
]


function getTypeName(
  type: ExperienceType,
) {
  const typeMap = {
    demo: '产品演示',
    video: '视频讲解',
    trial: '独立试用',
  }

  return typeMap[type]
}


function getStatusName(
  status: ExperienceItem['status'],
) {
  return status ===
    'available'
    ? '可体验'
    : '准备中'
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
  productId: string,
) {
  const product =
    products.find(
      item =>
        item.id ===
        productId,
    )


  if (!product) {
    return
  }


  router.push(
    `/products/${product.slug}`,
  )
}


function handleExperience(
  item: ExperienceItem,
) {

  if (
    item.status ===
      'available' &&
    item.url
  ) {
    window.open(
      item.url,
      '_blank',
    )

    return
  }


  goProduct(
    item.productId,
  )
}
</script>


<style scoped>
.experience-page {
  background:
    #ffffff;
}


/* =====================================================
   Common
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
   Experience Mode
===================================================== */

.experience-mode-section {
  padding:
    82px 0;
}


.mode-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 17px;
}


.mode-card {
  min-height: 225px;

  padding: 28px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.mode-number {
  color:
    #bdd0e7;

  font-size: 27px;

  font-weight: 600;
}


.mode-card small {
  display: block;

  margin-top: 28px;

  color:
    var(--color-primary);

  font-size: 8px;

  letter-spacing:
    0.8px;
}


.mode-card h3 {
  margin:
    5px 0 11px;

  font-size: 19px;
}


.mode-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


/* =====================================================
   Featured
===================================================== */

.featured-section {
  padding:
    82px 0;

  background:
    var(--color-bg-light);
}


.featured-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 18px;
}


.featured-card {
  min-height: 350px;

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

  transition:
    all
    var(--transition-normal);
}


.featured-card:hover {
  transform:
    translateY(-4px);

  box-shadow:
    var(--shadow-card-hover);
}


.featured-card-head {
  display: flex;

  align-items: center;

  justify-content:
    space-between;
}


.featured-index {
  color:
    #bfd0e4;

  font-size: 25px;

  font-weight: 600;
}


.status {
  padding:
    5px 9px;

  border-radius:
    999px;

  font-size: 9px;
}


.status.available {
  color:
    #14764b;

  background:
    #edf8f3;
}


.status.preparing {
  color:
    #8b7138;

  background:
    #f7f3e9;
}


.featured-content {
  margin-top: 28px;
}


.featured-content small {
  color:
    var(--color-primary);

  font-size: 8px;

  letter-spacing:
    0.8px;
}


.featured-content h3 {
  margin:
    7px 0 13px;

  font-size: 20px;
}


.featured-content > p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.8;
}


.featured-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;

  margin-top: 20px;
}


.featured-tags span {
  padding:
    5px 8px;

  border-radius:
    5px;

  background:
    #f3f7fb;

  color:
    #607186;

  font-size: 10px;
}


.featured-footer {
  display: flex;

  align-items: center;

  justify-content:
    space-between;

  gap: 12px;

  margin-top: auto;

  padding-top: 26px;
}


.featured-footer button {
  padding: 0;

  border: 0;

  background:
    transparent;

  color:
    var(--color-primary);

  font-size: 12px;

  cursor: pointer;
}


.featured-footer
.secondary-link {
  color:
    var(--color-text-tertiary);
}


/* =====================================================
   Resource
===================================================== */

.resource-section {
  padding:
    84px 0 100px;
}


.resource-toolbar {
  display: flex;

  align-items: flex-end;

  justify-content:
    space-between;

  gap: 40px;

  margin-bottom: 30px;
}


.resource-toolbar h2 {
  margin: 0;

  font-size: 34px;
}


.resource-toolbar > div:first-child > p:last-child {
  margin:
    10px 0 0;

  color:
    var(--color-text-tertiary);

  font-size: 12px;
}


.filter-tabs {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;
}


.filter-tabs button {
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
}


.filter-tabs button.active {
  border-color:
    var(--color-primary);

  background:
    var(--color-primary);

  color:
    #ffffff;
}


/* 列表式资源 */

.resource-list {
  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.resource-item {
  display: grid;

  grid-template-columns:
    55px
    minmax(240px, 1.1fr)
    minmax(180px, 0.9fr)
    120px;

  align-items: center;

  gap: 25px;

  min-height: 150px;

  padding:
    24px 28px;

  border-bottom:
    1px solid
    var(--color-border-light);
}


.resource-item:last-child {
  border-bottom: 0;
}


.resource-index {
  color:
    #bfd0e4;

  font-size: 24px;

  font-weight: 600;
}


.resource-main > span {
  color:
    var(--color-primary);

  font-size: 9px;
}


.resource-main h3 {
  margin:
    5px 0 8px;

  font-size: 17px;
}


.resource-main p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 12px;

  line-height: 1.7;
}


.resource-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;
}


.resource-tags span {
  padding:
    5px 8px;

  border-radius:
    5px;

  background:
    #f4f7fb;

  color:
    #617288;

  font-size: 9px;
}


.resource-action {
  display: flex;

  align-items: flex-end;

  flex-direction: column;

  gap: 14px;
}


.resource-action button {
  padding: 0;

  border: 0;

  background:
    transparent;

  color:
    var(--color-primary);

  font-size: 11px;

  cursor: pointer;
}


/* Empty */

.empty-state {
  padding:
    90px 30px;

  border:
    1px dashed
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    var(--color-bg-light);

  text-align: center;
}


.empty-state > span {
  color:
    var(--color-primary);

  font-size: 8px;

  letter-spacing:
    1px;
}


.empty-state strong {
  display: block;

  margin-top: 12px;

  font-size: 18px;
}


.empty-state p {
  margin:
    10px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 13px;
}


/* =====================================================
   Process
===================================================== */

.process-section {
  padding:
    88px 0;

  color:
    #ffffff;

  background:
    linear-gradient(
      135deg,
      #10233f,
      #153b68
    );
}


.process-heading {
  display: flex;

  align-items: flex-end;

  justify-content:
    space-between;

  gap: 50px;

  margin-bottom: 48px;
}


.process-heading p {
  margin:
    0 0 10px;

  color:
    #77acf2;

  font-size: 10px;

  letter-spacing:
    1.4px;
}


.process-heading h2 {
  margin: 0;

  color: #ffffff;

  font-size: 35px;
}


.process-heading > span {
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


.process-grid {
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


.process-item {
  min-height: 200px;

  padding: 27px;

  border-right:
    1px solid
    rgba(
      255,
      255,
      255,
      0.12
    );
}


.process-item:last-child {
  border-right: 0;
}


.process-item > span {
  color:
    #77acf2;

  font-size: 23px;
}


.process-item h3 {
  margin:
    30px 0 10px;

  color:
    #ffffff;

  font-size: 17px;
}


.process-item p {
  margin: 0;

  color:
    rgba(
      255,
      255,
      255,
      0.55
    );

  font-size: 12px;

  line-height: 1.8;
}


/* =====================================================
   CTA
===================================================== */

.cta-section {
  padding:
    80px 0 100px;
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


/* =====================================================
   Responsive
===================================================== */

@media (max-width: 1050px) {
  .featured-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .resource-item {
    grid-template-columns:
      50px 1fr 120px;
  }


  .resource-tags {
    display: none;
  }
}


@media (max-width: 780px) {
  .section-heading {
    grid-template-columns:
      1fr;

    gap: 18px;
  }


  .mode-grid,
  .featured-grid {
    grid-template-columns:
      1fr;
  }


  .resource-toolbar {
    align-items:
      flex-start;

    flex-direction:
      column;
  }


  .resource-item {
    grid-template-columns:
      1fr;

    gap: 12px;
  }


  .resource-index {
    font-size: 20px;
  }


  .resource-action {
    align-items:
      flex-start;
  }


  .process-heading {
    align-items:
      flex-start;

    flex-direction:
      column;
  }


  .process-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .process-item:nth-child(2) {
    border-right: 0;
  }


  .cta-box {
    align-items:
      flex-start;

    flex-direction:
      column;
  }
}


@media (max-width: 520px) {
  .process-grid {
    grid-template-columns:
      1fr;
  }


  .process-item {
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


  .process-item:last-child {
    border-bottom: 0;
  }
}
</style>