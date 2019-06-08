import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import {
  webhookGet,
  webhookPost,
  messengerProfileApiMiddleware
} from 'src/middleware'
import demoBot from 'src/chatbots'

const router = new Router()
const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

router.use(bodyParser())

router.post('/webhook', webhookPost(demoBot))

router.get('/webhook', webhookGet)

router.get('/update-messenger-profile', messengerProfileApiMiddleware)

app.listen(3000)

console.log('bot is listening')
