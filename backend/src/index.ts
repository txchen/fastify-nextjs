require('make-promises-safe')
import createServer from './server'

const port: number = parseInt(process.env.PORT as string, 10) || 4000
process.env.PORT = port.toString()

const start = async () => {
  const fastify = await createServer()
  try {
    await fastify.listen(port)
    fastify.log.info(`Backend (fastify) listening on port ${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start().catch(err => console.error(err))
