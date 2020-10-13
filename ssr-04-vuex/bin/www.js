const Koa = require('koa')
const Router = require('koa-router')
const statics = require('koa-static')
const path = require('path')
const fs = require('fs')
const app = new Koa()
const router = new Router()
const favicon = require('koa-favicon')
const { createBundleRenderer } = require('vue-server-renderer')

// 资源文件
app.use(statics(path.resolve(__dirname, '../dist')))
app.use(favicon(path.resolve(__dirname, '../favicon.ico')))

const bundle = path.resolve(__dirname, '../dist/server.bundle.js')
const renderer = createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, '../dist/index.template.html'), 'utf-8'),
})

router.get('*', async (ctx, next) => {
  let context = {
    url: ctx.url,
  }

  // 服务端渲染结果转换成字符串
  try {
    let html = await renderer.renderToString(context)

    ctx.status = 200
    ctx.type = 'html'
    ctx.body = html
  } catch (error) {
    console.error(err)
    ctx.status = err.code || 500
    ctx.type = 'html'
    ctx.body = err.msg || '服务器内部错误'
  }
})

app.use(router.routes()) /*启动路由*/.use(router.allowedMethods())

app.listen(3032, () => {
  console.log('demo04 - 地址： http://localhost:3032')
})
