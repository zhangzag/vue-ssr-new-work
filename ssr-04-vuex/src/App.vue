<template>
  <section id="app" class="outer">
    <h2>vue ssr案例 - 服务端渲染实现 vuex</h2>
    <router-link to="/">首页 首页</router-link>
    <router-link to="/list">列表 列表</router-link>
    <div class="wrap">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.outer {
  padding: 30px;
}
.wrap {
  display: flex;
  font-size: 20px;
}
.wrap > * {
  width: 50%;
  height: 150px;
}
</style>
