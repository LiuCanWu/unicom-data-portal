<template>
  <section class="product-hero">

    <div class="hero-glow glow-1" />
    <div class="hero-glow glow-2" />

    <div class="page-container hero-inner">

      <!-- 左侧 -->
      <div class="hero-content">

        <div class="hero-meta">

          <span class="category">
            {{ categoryName }}
          </span>

          <span
            v-if="product.status === 'coming-soon'"
            class="status-tag"
          >
            规划中
          </span>

        </div>


        <h1>
          {{ product.name }}
        </h1>


        <p class="tagline">
          {{ product.tagline }}
        </p>


        <div class="tags">

          <span
            v-for="tag in product.tags.slice(0, 5)"
            :key="tag"
          >
            {{ tag }}
          </span>

        </div>


        <div class="actions">

          <el-button
            type="primary"
            size="large"
            @click="emit('experience')"
          >
            在线体验
          </el-button>


          <el-button
            size="large"
            @click="emit('trial')"
          >
            申请试用
          </el-button>

        </div>

      </div>


      <!-- 右侧产品视觉 -->
      <div class="hero-visual">

        <div class="visual-top">

          <span>
            PRODUCT
          </span>

          <strong>
            0{{ product.order }}
          </strong>

        </div>


        <div class="visual-main">

          <small>
            {{ categoryName }}
          </small>

          <h2>
            {{
              product.shortName ||
              product.name
            }}
          </h2>

          <p>
            DATA INTELLIGENCE
          </p>

        </div>


        <div class="visual-bottom">

          <span
            v-for="tag in product.tags.slice(0, 3)"
            :key="tag"
          >
            {{ tag }}
          </span>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup lang="ts">
import type {
  Product,
} from '../../types/product'


defineProps<{
  product: Product
  categoryName: string
}>()


const emit = defineEmits<{
  experience: []
  trial: []
}>()
</script>


<style scoped>
.product-hero {
  position: relative;

  overflow: hidden;

  padding:
    104px 0 94px;

  border-bottom:
    1px solid
    var(--color-border-light);

  background:
    linear-gradient(
      180deg,
      #f7faff 0%,
      #ffffff 100%
    );
}


.hero-glow {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;
}


.glow-1 {
  top: -160px;

  right: 5%;

  width: 440px;
  height: 440px;

  background:
    radial-gradient(
      circle,
      rgba(
        21,
        101,
        216,
        0.10
      ),
      transparent 68%
    );
}


.glow-2 {
  left: 36%;

  bottom: -220px;

  width: 380px;
  height: 380px;

  background:
    radial-gradient(
      circle,
      rgba(
        82,
        144,
        229,
        0.07
      ),
      transparent 68%
    );
}


.hero-inner {
  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    minmax(0, 1.08fr)
    minmax(340px, 0.92fr);

  align-items: center;

  gap: 82px;
}


.hero-meta {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 20px;
}


.category {
  color:
    var(--color-primary);

  font-size: 13px;

  font-weight: 600;
}


.status-tag {
  padding:
    4px 8px;

  border-radius: 999px;

  background:
    #f3f4f6;

  color:
    var(--color-text-tertiary);

  font-size: 10px;
}


h1 {
  max-width: 760px;

  margin: 0;

  font-size: 56px;

  font-weight: 600;

  line-height: 1.16;

  letter-spacing:
    -0.04em;
}


.tagline {
  max-width: 760px;

  margin:
    27px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 19px;

  line-height: 1.85;
}


.tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 28px;
}


.tags span {
  padding:
    7px 11px;

  border:
    1px solid
    rgba(
      21,
      101,
      216,
      0.09
    );

  border-radius: 999px;

  background:
    rgba(
      238,
      245,
      255,
      0.82
    );

  color:
    var(--color-primary);

  font-size: 11px;
}


.actions {
  display: flex;

  gap: 12px;

  margin-top: 36px;
}


/* 右侧视觉 */

.hero-visual {
  min-height: 340px;

  padding: 30px;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  position: relative;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.08
    );

  border-radius:
    24px;

  background:
    linear-gradient(
      145deg,
      #10233f 0%,
      #153d6c 56%,
      #1768c4 100%
    );

  box-shadow:
    0 26px 64px
    rgba(
      15,
      35,
      65,
      0.16
    );
}


.hero-visual::before {
  position: absolute;

  top: -100px;

  right: -80px;

  width: 260px;
  height: 260px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(
        255,
        255,
        255,
        0.14
      ),
      transparent 68%
    );

  content: "";
}


.hero-visual::after {
  position: absolute;

  left: -70px;

  bottom: -120px;

  width: 260px;
  height: 260px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(
        90,
        160,
        255,
        0.18
      ),
      transparent 68%
    );

  content: "";
}


.visual-top,
.visual-main,
.visual-bottom {
  position: relative;

  z-index: 2;
}


.visual-top {
  display: flex;

  align-items: center;

  justify-content:
    space-between;
}


.visual-top span {
  color:
    rgba(
      255,
      255,
      255,
      0.48
    );

  font-size: 10px;

  letter-spacing:
    1.6px;
}


.visual-top strong {
  color:
    rgba(
      255,
      255,
      255,
      0.24
    );

  font-size: 28px;
}


.visual-main {
  margin-top: auto;
}


.visual-main small {
  color:
    rgba(
      255,
      255,
      255,
      0.58
    );

  font-size: 11px;
}


.visual-main h2 {
  margin:
    9px 0 0;

  color: #ffffff;

  font-size: 30px;

  line-height: 1.4;
}


.visual-main p {
  margin:
    11px 0 0;

  color:
    rgba(
      255,
      255,
      255,
      0.35
    );

  font-size: 9px;

  letter-spacing:
    1.4px;
}


.visual-bottom {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;

  margin-top: 26px;
}


.visual-bottom span {
  padding:
    5px 8px;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.12
    );

  border-radius: 999px;

  color:
    rgba(
      255,
      255,
      255,
      0.65
    );

  font-size: 9px;
}


@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;

    gap: 50px;
  }


  .hero-visual {
    min-height: 250px;
  }
}


@media (max-width: 600px) {
  .product-hero {
    padding:
      74px 0 66px;
  }


  h1 {
    font-size: 40px;
  }


  .tagline {
    font-size: 16px;
  }


  .actions {
    flex-direction: column;

    align-items: flex-start;
  }
}
</style>