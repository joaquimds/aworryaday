import React from 'react'
import moment from 'moment'

const incDate = date => {
  return moment(date).add(1, 'day').format('YYYY-MM-DD')
}

const decDate = date => {
  return moment(date).subtract(1, 'day').format('YYYY-MM-DD')
}

const WorryCalendar = ({ worry, date, loading, getWorry }) => (
  <div className="worry">
    <h6>{moment(date).format('DD MMM YY')}</h6>
    <h3>{worry}</h3>
    <div className="btn-group">
      <button disabled={loading} className="btn btn-secondary" onClick={() => getWorry(decDate(date))}>Previous Worry</button>
      <button disabled={loading} className="btn btn-secondary" onClick={() => getWorry(incDate(date))}>Next Worry</button>
    </div>
  </div>
)

export default WorryCalendar
