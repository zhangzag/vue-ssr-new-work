// 将创建的实例进行挂载
import { createApp } from './app.js'

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#app')
})
