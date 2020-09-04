const express = require('express')
var compression = require('compression')
const next = require('next')
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const spdy = require('spdy')

const options = {
  key: fs.readFileSync(path.join(__dirname, '/privateKey.key')),
  cert: fs.readFileSync(path.join(__dirname, '/certificate.crt')),
}

const port = parseInt(process.env.PORT, 10) || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(compression())
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  // server.listen(port, (err) => {
  //   if (err) throw err
  //   console.log(`> Ready on http://localhost:${port}`)
  // })
  spdy.createServer(options, server).listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log(`HTTP/2 server listening on port: ${port}`)
    }
  })
})
