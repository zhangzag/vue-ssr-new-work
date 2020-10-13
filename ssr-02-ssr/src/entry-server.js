import { createApp } from './app.js'

export default (context) => {
  // console.log('context: ', context)
  return new Promise((resolve, reject) => {
    const { app } = createApp()
    resolve(app)
  })
}
