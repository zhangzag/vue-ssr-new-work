<template>
  <section class="outer">
    <h2>vue ssr案例 - 客户端渲染</h2>
    <div class="wrap">
      <home />
      <list />
    </div>
  </section>
</template>

<script>
import Home from './components/Home.vue'
import List from './components/list.vue'

export default {
  name: 'App',
  components: {
    Home,
    List,
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
