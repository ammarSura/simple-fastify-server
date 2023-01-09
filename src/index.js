import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  console.log('Hello world')
  return reply.send({ message: 'Docker fun!' })
})

const start = async () => {
  const port = 8001
  try {
    await fastify.listen(4000, '0.0.0.0', error => {
      if (error) {
        process.exit(1);
      }
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()