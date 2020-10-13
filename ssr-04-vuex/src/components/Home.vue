<template>
  <section class="home">
    home.vue --- home页面
    <div>
      <h3>store 数据 ---</h3>
      <ul>
        <li v-for="(item, index) in $store.state.datas" :key="index">{{ `姓名：${item.name} | 年龄: ${item.age} | 爱好: ${item.fav}` }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  asyncData({ store, route }) {
    return store.dispatch('fetchData') // 服务端获取异步数据
  },
  data() {
    return {}
  },
  mounted() {
    // 客户端不存在 created 和 beforeCreated 生命周期
    console.log('store', this.$store)
  },
}
</script>

<style>
.home {
  background-color: skyblue;
  padding: 20px;
}
</style>
