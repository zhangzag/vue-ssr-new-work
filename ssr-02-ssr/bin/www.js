const Koa = require('koa')
const Router = require('koa-router')
const statics = require('koa-static')
const path = require('path')
const fs = require('fs')
const app = new Koa()
const router = new Router()
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// 服务端执行vue操作
const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8')
// 客户端激活
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.template.html'), 'utf-8')
const renderer = createBundleRenderer(bundle, {
  template,
})

// 资源文件
app.use(statics(path.resolve(__dirname, '../dist')))

router.get('/', async (ctx, next) => {
  const context = {
    meta: `
    <meta name="mobile-web-app-capable" content="yes">
    `,
  }

  try {
    let html = await renderer.renderToString(context)

    ctx.status = 200
    ctx.type = 'html'
    ctx.body = html
  } catch (error) {
    console.log('error >>>', error)
    ctx.status = 500
    ctx.body = '服务器内部错误'
  }
})

// 开启路由
app.use(router.routes()).use(router.allowedMethods())

// 应用监听端口
app.listen(3002, () => {
  console.log('服务器端渲染地址： http://localhost:3002')
})
