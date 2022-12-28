// @/src/main.ts
import Koa from 'koa'
import koaBody from 'koa-body'

import router from '@routes/index'
// import { logger } from '@middlewares/index'

const startServer = async (): Promise<Koa> => {
  const app = new Koa()

  app.use(koaBody())
  app.use(router.routes())

  return app
}

startServer()
  .then((app) => app.listen(3333))
  .catch(console.error)
