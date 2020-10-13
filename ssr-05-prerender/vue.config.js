const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  lintOnSave: false,
  outputDir: path.join(__dirname, './dist'),
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, './dist'),
          routes: ['/', '/about'],
          server: {
            port: 8001
          },
          // 渲染器
          renderer: new Renderer({
            // injectProperty: '__PRERENDER_INJECTED',
            inject: {
              foo: 'bar'
            },
            //  路由是异步呈现的。
            //  使用它来限制并行渲染的路由数量。默认为0，无限制
            // maxConcurrentRoutes: 1,
            headless: false,
            renderAfterTime: 5000 // 等待多少秒之后去开始渲染，设置合适的事件方便我们等待请求返回数据
            // renderAfterElementExists: '', // 等待渲染，直到使用`document.querySelector`检测到指定的元素为止
            // renderAfterDocumentEvent: 'render-event' // 当触发某个事件的时候开始渲染,例如，带有`document.dispatchEvent（new Event（'自定义事件名'））`
          })
        })
      ]
    }
  }
}
