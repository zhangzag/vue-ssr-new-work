import { createApp } from './app.js'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    // 路由跳转到浏览器输入的URL
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // 未匹配到路由
      if (!matchedComponents.length) {
        return reject({ context, code: 404, msg: '未找到页面' })
      }

      resolve(app)
    }, reject)
  })
}
