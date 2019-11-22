import * as Fastify from 'fastify'
import { Blog } from '../../../common/blog'
import { Comment } from '../../../common/comment'

export default (fastify: Fastify.FastifyInstance, _opts: unknown, next: (err?: Fastify.FastifyError) => void) => {
  fastify.get('/blogs', async (req, reply) => {
    const result: Blog[] = []
    result.push({
      title: 'title1',
      content: 'blogpost1',
      author: 'abc'
    })
    result.push({
      title: 'title2',
      content: 'blogpost2',
      author: 'xyz'
    })
    return result
  })

  fastify.get('/comments', async (req, reply) => {
    const result: Comment[] = []
    result.push({
      content: 'comment1',
      author: 'qqq'
    })
    result.push({
      content: 'comment2',
      author: 'www'
    })
    return result
  })
  next()
}