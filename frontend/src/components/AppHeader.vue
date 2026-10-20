<template>
  <header class="app-header">
    <div class="header-container">

      <!-- Brand -->
      <div
        class="brand"
        @click="router.push('/')"
      >

        <div class="brand-mark">
          U
        </div>

        <div class="brand-text">

          <strong>
            联通星瀚大数据
          </strong>

          <span>
            Data Intelligence
          </span>

        </div>

      </div>


      <!-- Navigation -->
      <nav class="nav">

        <router-link
          to="/"
          class="nav-item"
        >
          首页
        </router-link>


        <router-link
          to="/products"
          class="nav-item"
        >
          产品
        </router-link>


        <router-link
          to="/experience"
          class="nav-item"
        >
          体验中心
        </router-link>


        <router-link
          to="/solutions"
          class="nav-item"
        >
          解决方案
        </router-link>


        <router-link
          to="/about"
          class="nav-item"
        >
          关于我们
        </router-link>

      </nav>


      <!-- Actions -->
      <div class="header-actions">

        <el-button
          text
          @click="handleContact"
        >
          联系我们
        </el-button>


        <el-button
          type="primary"
          @click="
            router.push(
              '/experience'
            )
          "
        >
          体验产品
        </el-button>

      </div>


      <!-- Mobile -->
      <button
        class="mobile-menu"
        type="button"
        aria-label="菜单"
      >
        ☰
      </button>

    </div>
  </header>
</template>


<script setup lang="ts">
import {
  useRouter,
} from 'vue-router'


const router =
  useRouter()


function handleContact() {
  router.push('/contact')
}
</script>


<style scoped>
.app-header {
  position: sticky;

  top: 0;

  z-index: 100;

  height:
    var(--header-height);

  border-bottom:
    1px solid
    rgba(231, 235, 240, 0.82);

  background:
    rgba(255, 255, 255, 0.92);

  backdrop-filter:
    blur(18px);
}


.header-container {
  width: 100%;

  max-width:
    var(--page-max-width);

  height: 100%;

  margin:
    0 auto;

  padding:
    0 var(--page-padding-x);

  display: flex;

  align-items: center;
}


/* Brand */

.brand {
  display: flex;

  align-items: center;

  gap: 12px;

  flex-shrink: 0;

  cursor: pointer;
}


.brand-mark {
  width: 36px;
  height: 36px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #0d57c7,
      #277ceb
    );

  font-size: 18px;

  font-weight: 700;

  box-shadow:
    0 6px 16px
    rgba(21, 101, 216, 0.2);
}


.brand-text {
  display: flex;

  flex-direction: column;

  line-height: 1.25;
}


.brand-text strong {
  color:
    var(--color-text-primary);

  font-size: 15px;

  font-weight: 600;
}


.brand-text span {
  margin-top: 3px;

  color:
    var(--color-text-tertiary);

  font-size: 10px;

  letter-spacing:
    0.5px;
}


/* Navigation */

.nav {
  display: flex;

  align-items: center;

  gap: 8px;

  margin-left: 64px;
}


.nav-item {
  position: relative;

  padding:
    22px 14px;

  color:
    var(--color-text-secondary);

  font-size: 14px;

  font-weight: 500;

  transition:
    color
    var(--transition-fast);
}


.nav-item:hover {
  color:
    var(--color-primary);
}


.nav-item.router-link-exact-active {
  color:
    var(--color-primary);
}


.nav-item.router-link-exact-active::after {
  position: absolute;

  left: 14px;
  right: 14px;

  bottom: 0;

  height: 2px;

  border-radius:
    2px;

  background:
    var(--color-primary);

  content: "";
}


/* Actions */

.header-actions {
  margin-left: auto;

  display: flex;

  align-items: center;

  gap: 6px;
}


/* Mobile */

.mobile-menu {
  display: none;

  margin-left: auto;

  border: 0;

  background: transparent;

  color:
    var(--color-text-primary);

  font-size: 24px;

  cursor: pointer;
}


@media (
  max-width: 980px
) {
  .nav,
  .header-actions {
    display: none;
  }


  .mobile-menu {
    display: block;
  }
}
</style>
