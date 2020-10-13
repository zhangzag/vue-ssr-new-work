<template>
  <section class="list">
    list.vue --- list页面
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
  name: 'List',
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
.list {
  background-color: #e9db7a;
  padding: 20px;
}
</style>
