const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = merge(base, {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '../src/entry-server.js')
  },
  // 使用 Node 风格导出模块
  output: {
    libraryTarget: 'commonjs2'
  }
})
