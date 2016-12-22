import express from 'express'
import expressSession from 'express-session'
import path from 'path'
import http from 'http'
import mustacheExpress from 'mustache-express'
import bodyParser from 'body-parser'
import passport from 'passport'
import './db'
import auth from './auth'
import api from './api'

const app = express()

app.use(expressSession({
  secret: 'worries',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', path.resolve(__dirname, 'views'))

const assetPath = path.resolve(__dirname, '..', 'public')
app.use(express.static(assetPath))

app.use(bodyParser.json())
app.use('/api', api)
app.use('/api/auth', auth)
app.all('/api*', (req, res) => res.sendStatus(404))

app.get('/*', (req, res) => {
  const scripts = process.env.NODE_ENV === 'production' ? '' : '//localhost:8080'
  res.render('index.mustache', { scripts })
})

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

const server = http.createServer(app)
server.listen(3000, () => {
  console.log('App listening on port 3000!')
})
