<template>
  <section class="product-hero">
    <div class="page-container hero-inner">

      <div class="hero-content">

        <span class="category">
          {{ categoryName }}
        </span>

        <h1>
          {{ product.name }}
        </h1>

        <p class="tagline">
          {{ product.tagline }}
        </p>

        <div class="tags">
          <span
            v-for="tag in product.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>

        <div class="actions">

          <el-button
            type="primary"
            size="large"
            @click="$emit('experience')"
          >
            在线体验
          </el-button>

          <el-button
            size="large"
            @click="$emit('trial')"
          >
            申请试用
          </el-button>

        </div>

      </div>


      <div class="hero-visual">

        <div class="visual-label">
          PRODUCT
        </div>

        <div class="visual-name">
          {{ product.shortName || product.name }}
        </div>

        <div class="visual-category">
          {{ categoryName }}
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


defineEmits<{
  experience: []
  trial: []
}>()
</script>


<style scoped>
.product-hero {
  padding:
    96px 0 88px;

  background:
    radial-gradient(
      circle at 78% 40%,
      rgba(22, 119, 255, 0.14),
      transparent 30%
    ),
    linear-gradient(
      180deg,
      #f6faff 0%,
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


.category {
  display: inline-block;

  margin-bottom: 18px;

  color:
    var(--color-primary);

  font-size: 14px;

  font-weight: 600;
}


h1 {
  margin: 0;

  font-size: 56px;

  line-height: 1.18;
}


.tagline {
  max-width: 780px;

  margin:
    26px 0 0;

  color:
    var(--color-text-secondary);

  font-size: 20px;

  line-height: 1.8;
}


.tags {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 28px;
}


.tags span {
  padding:
    7px 12px;

  border-radius: 999px;

  background:
    #eef5ff;

  color:
    var(--color-primary);

  font-size: 13px;
}


.actions {
  display: flex;

  gap: 14px;

  margin-top: 34px;
}


.hero-visual {
  min-height: 320px;

  padding: 34px;

  display: flex;

  flex-direction: column;

  justify-content: flex-end;

  border:
    1px solid
    rgba(22, 119, 255, 0.12);

  border-radius:
    24px;

  background:
    linear-gradient(
      135deg,
      #0f2b52,
      #1768c4
    );

  color: #ffffff;

  box-shadow:
    0 24px 60px
    rgba(22, 119, 255, 0.16);
}


.visual-label {
  margin-bottom: auto;

  color:
    rgba(255, 255, 255, 0.54);

  font-size: 12px;

  letter-spacing: 1.5px;
}


.visual-name {
  font-size: 30px;

  font-weight: 600;

  line-height: 1.35;
}


.visual-category {
  margin-top: 12px;

  color:
    rgba(255, 255, 255, 0.7);

  font-size: 14px;
}


@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }


  .hero-visual {
    min-height: 220px;
  }
}


@media (max-width: 600px) {
  h1 {
    font-size: 40px;
  }


  .tagline {
    font-size: 17px;
  }


  .actions {
    flex-direction: column;

    align-items: flex-start;
  }
}
</style>