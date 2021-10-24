const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({
  logger: true,
  static: path.join(__dirname, 'server'),
})

server.use(middlewares)
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})
