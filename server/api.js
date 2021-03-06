import express from 'express'
import moment from 'moment'
import db from './db'
const router = express.Router()

router.put('/worries/:date', (req, res, next) => {
  const date = moment(req.params.date)
  const worry = req.body.worry

  if (!req.user) {
    return res.sendStatus(403)
  }

  if (!date.isValid() || !worry) {
    return res.sendStatus(400)
  }
  const dateString = date.format('YYYY-MM-DD')
  db.query(
    'INSERT INTO worries (date, text) VALUES ($1, $2) ON CONFLICT (date) DO UPDATE SET text = EXCLUDED.text',
    [ dateString, worry ],
    err => {
      if (err) {
        return next(err)
      }
      res.sendStatus(200)
    }
  )
})

router.get('/worries/:date', (req, res, next) => {
  const date = moment(req.params.date)
  if (!date.isValid()) {
    return res.sendStatus(400)
  }
  const dateString = date.format('YYYY-MM-DD')
  db.query('SELECT * FROM worries WHERE date=$1 LIMIT 1', [ dateString ], (err, result) => {
    if (err) {
      return next(err)
    }
    const worry = result.rows[ 0 ]
    if (!worry) {
      return res.sendStatus(404)
    }
    res.send(worry.text)
  })
})

export default router
