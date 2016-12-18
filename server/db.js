import pg from 'pg'
import config from 'config'

const client = new pg.Client(config.get('pgUrl'))

client.connect(err => {
  if (err) throw err
})

export default client
