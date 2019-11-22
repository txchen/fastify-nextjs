import * as Fastify from 'fastify'
import api from './api'

export default async function createServer () {
  const fastify = Fastify({ logger: true })
  fastify.register(require('fastify-cors'), {
    // put your options here
  })
  fastify.register(api, { prefix: '/api' })
  return fastify
}