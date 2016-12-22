import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'
import express from 'express'

const router = express.Router()

const james = { id: 1, name: 'james' }
const hash = '$2a$10$KaW79tNGAVm1wfE2.sdNR.P/FHnYL7Y6KLTWxOa6MPDg2YdrxiZm2'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  done(null, james)
})

passport.use(new LocalStrategy(
  (username, password, done) => {
    if (username === 'james') {
      bcrypt.compare(password, hash, (err, valid) => {
        if (err) {
          return done(err)
        }
        return done(null, valid ? james : false)
      })
    } else {
      done(null, false)
    }
  }
))

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.sendStatus(200)
})

router.post('/logout', (req, res) => {
  req.logout()
  res.sendStatus(200)
})

export default router
