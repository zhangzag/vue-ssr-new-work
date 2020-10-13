<template>
  <section id="app" class="outer">
    <h2>vue ssr案例 - 服务端渲染（不含 vue-router 和 vuex）</h2>
    <div class="wrap">
      <home />
      <list />
    </div>
  </section>
</template>

<script>
import home from './components/Home.vue'
// const home = () => import('./components/Home.vue')
import list from './components/list.vue'

export default {
  name: 'App',
  components: {
    home,
    list,
  },
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
