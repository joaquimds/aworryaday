import _ from 'lodash'
import moment from 'moment'

const worries = [
  { worry: 'Death', date: new Date() },
  { worry: 'Taxes', date: new Date(2016, 11, 12) },
  { worry: 'Brexit', date: new Date(2016, 11, 11) },
  { worry: 'Trump', date: new Date(2016, 11, 10) },
  { worry: 'Stress', date: new Date(2016, 11, 9) },
  { worry: 'Your insatiable desire to be worried', date: new Date(0) }
]

const findWorry = (maxDate = new Date()) => _.find(worries, worry => {
  const dateOfWorry = moment(worry.date)
  return dateOfWorry.isBefore(maxDate)
}).worry

const _getWorryItem = (requestedDate) => _.find(worries, worry => {
  const dateOfWorry = moment(worry.date)
  return dateOfWorry.isSame(requestedDate, 'day')
})

const getWorry = (requestedDate = new Date()) => {
  const item = _getWorryItem(requestedDate)
  return item && item.worry || ''
}

const setWorry = (requestedDate, newWorry) => {
  const worryForDate = _getWorryItem(requestedDate, true)
  if (worryForDate) {
    worryForDate.worry = newWorry
  } else {
    worries.push({ date: moment(requestedDate).toDate(), worry: newWorry })
    worries.sort((a, b) => a.date < b.date ? 1 : -1)
  }
}

export { findWorry, getWorry, setWorry }
