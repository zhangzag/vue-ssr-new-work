// 将创建的实例进行挂载
import { createApp } from './app.js'

const { app, store, router } = createApp()

// 客户端在挂载到应用程序之前，同步store状态
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// app.$mount('#app')

// 需要注意的是，你仍然需要在挂载 app 之前调用 router.onReady，因为路由器必须要提前解析路由配置中的异步组件，才能正确地调用组件中可能存在的路由钩子。这一步我们已经在我们的服务器入口 (server entry) 中实现过了，现在我们只需要更新客户端入口 (client entry)
router.onReady(() => {
  app.$mount('#app')
})
