const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({
  logger: true,
  static: path.join(__dirname, 'build'),
})

const PORT = process.env.PORT || 8000

server.use(middlewares)
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
)
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})
