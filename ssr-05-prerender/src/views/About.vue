<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      异步数据:
      <ul>
        <li v-for="(item, index) in info" :key="index">
          {{ `${item.name}，年龄：${item.age}，爱好：${item.fav}` }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      info: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.info = [
        { name: '小红', age: 18, fav: '前端' },
        { name: '小明', age: 18, fav: 'java' }
      ]
    }, 2000)
  }
}
</script>
