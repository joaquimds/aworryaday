import express from 'express'
import path from 'path'
import http from 'http'

const app = express()
const server = http.createServer(app)

const assetPath = path.resolve(__dirname, '..', 'public')
app.use(express.static(assetPath))

server.listen(3000, function () {
  console.log('App listening on port 3000!')
})
