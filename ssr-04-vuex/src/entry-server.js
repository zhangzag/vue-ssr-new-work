import { createApp } from './app.js'

// 用于创建 vue 实例
export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    // 路由跳转到浏览器输入的URL
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // 未匹配到路由
      if (!matchedComponents.length) {
        return reject({ context, code: 404, msg: '未找到页面' })
      }

      // 对所有匹配的路由组件调用 `asyncData()`
      Promise.all(
        matchedComponents.map((component) => {
          if (component.asyncData) {
            // 匹配的组件存在 asyncData 就将其执行
            return component.asyncData({ store, route: router.currentRoute })
          }
        })
      )
        .then((res) => {
          // 在所有预取钩子 resolve 后，我们的 store 现在已经填充入渲染应用程序所需的状态。
          // 当我们将状态附加到上下文，并且 `template` 选项用于 renderer 时，状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
          context.state = store.state

          // 成功并返回实例
          resolve(app)
        })
        .catch(reject)
    }, reject)
  })
}
