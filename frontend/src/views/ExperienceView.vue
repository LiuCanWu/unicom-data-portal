<template>
  <main class="experience-page">

    <!-- 01 Hero -->
    <PageHero
      eyebrow="EXPERIENCE CENTER"
      title="数据智能产品体验中心"
      description="集中展示联通数据智能产品 Demo、产品视频及独立试用环境入口，帮助用户快速理解产品能力与应用价值。"
    />


    <!-- 02 体验方式 -->
    <section class="page-section">
      <div class="page-container">

        <div class="section-header">
          <p>
            EXPERIENCE MODE
          </p>

          <h2>
            多种方式快速了解产品
          </h2>

          <span>
            根据产品当前建设情况，
            逐步提供演示、视频和独立试用环境。
          </span>
        </div>


        <div class="mode-grid">

          <article
            v-for="mode in experienceModes"
            :key="mode.title"
            class="mode-card"
          >
            <div class="mode-icon">
              {{ mode.number }}
            </div>

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


    <!-- 03 重点体验 -->
    <section class="featured-section">
      <div class="page-container">

        <div class="section-header">
          <p>
            FEATURED
          </p>

          <h2>
            重点产品体验
          </h2>

          <span>
            优先呈现数据智能产品家族中的核心产品能力。
          </span>
        </div>


        <div class="featured-grid">

          <article
            v-for="item in featuredExperiences"
            :key="item.id"
            class="featured-card"
          >

            <div class="featured-top">

              <span class="experience-type">
                {{
                  getTypeName(
                    item.type
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


            <div class="featured-visual">

              <span>
                PRODUCT EXPERIENCE
              </span>

              <strong>
                {{ item.title }}
              </strong>

            </div>


            <div class="featured-content">

              <h3>
                {{ item.title }}
              </h3>

              <p>
                {{ item.description }}
              </p>


              <div class="tags">

                <span
                  v-for="tag in item.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span>

              </div>


              <div class="card-actions">

                <el-button
                  type="primary"
                  @click="
                    handleExperience(
                      item
                    )
                  "
                >
                  {{
                    item.status ===
                    'available'
                      ? '立即体验'
                      : '查看介绍'
                  }}
                </el-button>


                <el-button
                  @click="
                    goProduct(
                      item.productId
                    )
                  "
                >
                  产品详情
                </el-button>

              </div>

            </div>

          </article>

        </div>

      </div>
    </section>


    <!-- 04 全部体验资源 -->
    <section class="page-section resource-section">
      <div class="page-container">

        <div class="resource-header">

          <div class="section-header">
            <p>
              ALL EXPERIENCE
            </p>

            <h2>
              全部体验资源
            </h2>

            <span>
              根据产品类型快速查找体验入口。
            </span>
          </div>


          <div class="filter-tabs">

            <button
              class="filter-tab"
              :class="{
                active:
                  selectedType ===
                  'all'
              }"
              @click="
                selectedType = 'all'
              "
            >
              全部
            </button>


            <button
              class="filter-tab"
              :class="{
                active:
                  selectedType ===
                  'demo'
              }"
              @click="
                selectedType = 'demo'
              "
            >
              产品演示
            </button>


            <button
              class="filter-tab"
              :class="{
                active:
                  selectedType ===
                  'video'
              }"
              @click="
                selectedType = 'video'
              "
            >
              视频讲解
            </button>


            <button
              class="filter-tab"
              :class="{
                active:
                  selectedType ===
                  'trial'
              }"
              @click="
                selectedType = 'trial'
              "
            >
              独立试用
            </button>

          </div>

        </div>


        <div class="resource-count">
          共
          <strong>
            {{ filteredExperiences.length }}
          </strong>
          项体验资源
        </div>


        <div
          v-if="
            filteredExperiences.length > 0
          "
          class="resource-grid"
        >

          <article
            v-for="item in filteredExperiences"
            :key="item.id"
            class="resource-card"
          >

            <div class="resource-top">

              <div>
                <span class="experience-type">
                  {{
                    getTypeName(
                      item.type
                    )
                  }}
                </span>

                <h3>
                  {{ item.title }}
                </h3>
              </div>


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


            <p>
              {{ item.description }}
            </p>


            <div class="resource-tags">

              <span
                v-for="tag in item.tags"
                :key="tag"
              >
                {{ tag }}
              </span>

            </div>


            <div class="resource-actions">

              <button
                class="text-button"
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

            </div>

          </article>

        </div>


        <div
          v-else
          class="empty-state"
        >
          <strong>
            当前暂无该类型体验资源
          </strong>

          <p>
            后续将根据各产品建设情况持续接入。
          </p>
        </div>

      </div>
    </section>


    <!-- 05 体验流程 -->
    <section class="process-section">
      <div class="page-container">

        <div class="section-header light">
          <p>
            HOW TO START
          </p>

          <h2>
            快速开始产品体验
          </h2>

          <span>
            从了解产品到进入独立体验环境，
            保持简单清晰的体验链路。
          </span>
        </div>


        <div class="process-grid">

          <div class="process-item">
            <span>
              01
            </span>

            <h3>
              选择产品
            </h3>

            <p>
              根据业务需求选择需要了解的数据智能产品。
            </p>
          </div>


          <div class="process-arrow">
            →
          </div>


          <div class="process-item">
            <span>
              02
            </span>

            <h3>
              查看演示
            </h3>

            <p>
              通过 Demo、截图或视频快速理解产品核心能力。
            </p>
          </div>


          <div class="process-arrow">
            →
          </div>


          <div class="process-item">
            <span>
              03
            </span>

            <h3>
              申请试用
            </h3>

            <p>
              对需要深入体验的产品申请独立试用环境。
            </p>
          </div>


          <div class="process-arrow">
            →
          </div>


          <div class="process-item">
            <span>
              04
            </span>

            <h3>
              深入体验
            </h3>

            <p>
              跳转至产品独立环境体验真实产品功能。
            </p>
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
              START NOW
            </p>

            <h2>
              找到适合你的数据智能产品
            </h2>

            <span>
              从产品介绍开始，
              逐步了解和体验核心能力。
            </span>
          </div>


          <div class="cta-actions">

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

  </main>
</template>


<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import {
  ElMessage,
} from 'element-plus'

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


const router = useRouter()


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
    title: '产品演示',
    description:
      '通过交互式 Demo 或功能演示快速了解产品核心操作和能力。',
  },
  {
    number: '02',
    title: '视频讲解',
    description:
      '通过产品介绍、操作演示和典型场景视频快速理解产品价值。',
  },
  {
    number: '03',
    title: '独立试用',
    description:
      '进入各产品独立试用环境，实际体验产品核心功能。',
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


function goProduct(
  productId: string,
) {
  const product =
    products.find(
      item =>
        item.id === productId,
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


function handleTrial() {
  ElMessage.info(
    '试用申请入口将在后续版本统一接入。',
  )
}
</script>


<style scoped>
.experience-page {
  background:
    #ffffff;
}


/* Section Header */

.section-header {
  max-width: 760px;

  margin-bottom: 44px;
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


/* 体验方式 */

.mode-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


.mode-card {
  min-height: 210px;

  padding: 30px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;
}


.mode-icon {
  width: 44px;
  height: 44px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 26px;

  border-radius: 10px;

  background:
    #eef5ff;

  color:
    var(--color-primary);

  font-weight: 600;
}


.mode-card h3 {
  margin:
    0 0 12px;

  font-size: 19px;
}


.mode-card p {
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


/* 重点体验 */

.featured-section {
  padding:
    80px 0;

  background:
    var(--color-bg-light);
}


.featured-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 22px;
}


.featured-card {
  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    #ffffff;

  transition:
    transform 0.25s,
    box-shadow 0.25s;
}


.featured-card:hover {
  transform:
    translateY(-5px);

  box-shadow:
    var(--shadow-card);
}


.featured-top {
  padding:
    18px 22px;

  display: flex;

  align-items: center;

  justify-content:
    space-between;
}


.experience-type {
  color:
    var(--color-primary);

  font-size: 12px;

  font-weight: 600;
}


.status {
  padding:
    5px 9px;

  border-radius:
    999px;

  font-size: 11px;
}


.status.available {
  color:
    #16794a;

  background:
    #edf9f3;
}


.status.preparing {
  color:
    #8a6d2f;

  background:
    #fff7e6;
}


.featured-visual {
  min-height: 190px;

  padding: 30px;

  display: flex;

  flex-direction: column;

  justify-content:
    flex-end;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #102a50,
      #1677ff
    );
}


.featured-visual span {
  margin-bottom: auto;

  color:
    rgba(
      255,
      255,
      255,
      0.5
    );

  font-size: 11px;

  letter-spacing: 1.4px;
}


.featured-visual strong {
  font-size: 25px;

  line-height: 1.4;
}


.featured-content {
  padding: 26px;
}


.featured-content h3 {
  margin:
    0 0 12px;

  font-size: 20px;
}


.featured-content > p {
  min-height: 74px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


.tags,
.resource-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 20px;
}


.tags span,
.resource-tags span {
  padding:
    6px 10px;

  border-radius: 6px;

  background:
    #f3f7fd;

  color:
    #56708f;

  font-size: 12px;
}


.card-actions {
  display: flex;

  gap: 10px;

  margin-top: 24px;
}


/* 全部体验 */

.resource-section {
  background:
    #ffffff;
}


.resource-header {
  display: flex;

  align-items:
    flex-end;

  justify-content:
    space-between;

  gap: 30px;
}


.resource-header
.section-header {
  margin-bottom: 28px;
}


.filter-tabs {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 28px;
}


.filter-tab {
  padding:
    9px 16px;

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
}


.filter-tab.active {
  border-color:
    var(--color-primary);

  background:
    var(--color-primary);

  color:
    #ffffff;
}


.resource-count {
  margin-bottom: 20px;

  color:
    var(--color-text-tertiary);

  font-size: 13px;
}


.resource-count strong {
  margin:
    0 4px;

  color:
    var(--color-text-primary);
}


.resource-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


.resource-card {
  min-height: 300px;

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
}


.resource-top {
  display: flex;

  align-items:
    flex-start;

  justify-content:
    space-between;

  gap: 16px;
}


.resource-card h3 {
  margin:
    9px 0 0;

  font-size: 19px;

  line-height: 1.45;
}


.resource-card > p {
  margin:
    18px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


.resource-actions {
  margin-top: auto;

  padding-top: 24px;
}


.text-button {
  padding: 0;

  border: 0;

  background:
    transparent;

  color:
    var(--color-primary);

  font-size: 13px;

  cursor: pointer;
}


.text-button span {
  margin-left: 5px;
}


.empty-state {
  padding:
    80px 30px;

  text-align: center;

  border:
    1px dashed
    var(--color-border);

  border-radius:
    var(--radius-lg);

  background:
    var(--color-bg-light);
}


.empty-state strong {
  font-size: 18px;
}


.empty-state p {
  margin:
    12px 0 0;

  color:
    var(--color-text-secondary);
}


/* 体验流程 */

.process-section {
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


.section-header.light > p {
  color:
    #7cb3ff;
}


.section-header.light h2 {
  color:
    #ffffff;
}


.section-header.light span {
  color:
    rgba(
      255,
      255,
      255,
      0.64
    );
}


.process-grid {
  display: flex;

  align-items: stretch;

  gap: 16px;
}


.process-item {
  flex: 1;

  padding: 26px;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.12
    );

  border-radius:
    var(--radius-lg);

  background:
    rgba(
      255,
      255,
      255,
      0.04
    );
}


.process-item > span {
  color:
    #7cb3ff;

  font-size: 25px;

  font-weight: 600;
}


.process-item h3 {
  margin:
    24px 0 10px;

  font-size: 18px;
}


.process-item p {
  margin: 0;

  color:
    rgba(
      255,
      255,
      255,
      0.62
    );

  font-size: 13px;

  line-height: 1.8;
}


.process-arrow {
  display: flex;

  align-items: center;

  color:
    rgba(
      255,
      255,
      255,
      0.35
    );

  font-size: 20px;
}


/* CTA */

.cta-section {
  padding:
    80px 0 100px;
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


.cta-actions {
  display: flex;

  gap: 12px;

  flex-shrink: 0;
}


/* Responsive */

@media (max-width: 1000px) {
  .resource-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .process-grid {
    display: grid;

    grid-template-columns:
      repeat(2, 1fr);
  }


  .process-arrow {
    display: none;
  }
}


@media (max-width: 800px) {
  .mode-grid,
  .featured-grid {
    grid-template-columns: 1fr;
  }


  .resource-header {
    align-items:
      flex-start;

    flex-direction:
      column;
  }


  .cta-box {
    align-items:
      flex-start;

    flex-direction:
      column;
  }
}


@media (max-width: 600px) {
  .resource-grid,
  .process-grid {
    grid-template-columns: 1fr;
  }


  .cta-actions {
    flex-direction: column;

    align-items: flex-start;
  }
}
</style>