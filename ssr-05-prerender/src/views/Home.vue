<template>
  <div class="home">
    <div>message 数据 -- {{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    title: 'home home home',
    titleTemplate: '标题 标题 标题',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    if (
      window.__PRERENDER_INJECTED &&
      window.__PRERENDER_INJECTED.foo === 'bar'
    ) {
      this.message = '我是测试预加载拦截';
    }
  }
}
</script>
