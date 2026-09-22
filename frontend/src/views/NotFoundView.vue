<template>
  <main class="not-found">
    <div>
      <h1>404</h1>

      <p>页面不存在</p>

      <router-link to="/">
        返回首页
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 96px;
  color: #1d2129;
}

p {
  color: #86909c;
}

a {
  display: inline-block;
  margin-top: 16px;
  color: #409eff;
}
</style>