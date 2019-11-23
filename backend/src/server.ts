import * as Fastify from 'fastify'
import api from './api'

export default async function createServer () {
  const fastify = Fastify({ logger: true })
  fastify.register(require('fastify-cors'), {
  })
  fastify.register(api, { prefix: '/api' })

  if (process.env.NODE_ENV === 'production') {
    console.log('next js inside here')
    fastify.register(require('fastify-nextjs'), {
      dir: `${__dirname}/../../..`
    }).after(() => {
      let f: any = fastify
      f.next('/*', (app: any, req: any, reply: any) => {
        app.render(req.raw, reply.res, '/', req.query, {})
      })
    })
  }
  return fastify
}