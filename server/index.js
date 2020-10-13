var http = require('http')
const Koa = require('koa')
var url = require('url')
var crypto = require('crypto')
const app = new Koa()
// var static = require('node-static')
const Router = require('koa-router')
const router = new Router()
const static = require('koa-static')
const path = require('path')
const cors = require('koa-cors')

// 资源文件
app.use(static(path.resolve(__dirname, './dist')))
app.use(cors())

function sha1(str) {
  var md5sum = crypto.createHash('sha1')
  md5sum.update(str)
  str = md5sum.digest('hex')
  return str
}

router.get('/user', async (ctx, next) => {
  let context = {
    url: ctx.url,
  }
  console.log('user')

  ctx.status = 200
  ctx.type = 'html'
  ctx.body = { msg: 56565656 } // 将html字符串传到浏览器渲染
})

router.get('/testapi', async (ctx, next) => {
  let context = {
    url: ctx.url,
  }

  ctx.status = 200
  ctx.type = 'html'
  ctx.body = { msg: '这是测试接口' } // 将html字符串传到浏览器渲染
})

app
  .use(router.routes()) /*启动路由*/
  .use(router.allowedMethods())

app.listen(3010, () => {
  console.log('http://localhost:3010')
})
