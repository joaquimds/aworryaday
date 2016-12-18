import moment from 'moment'
import types from '../actions/types'
import { findWorry } from '../worries'

const worryCalendar = (state = { worry: findWorry(), date: new Date() }, action) => {
  switch (action.type) {
    case types.NEXT_WORRY:
      const nextDate = moment(state.date).add(1, 'day').toDate()
      return { worry: findWorry(nextDate), date: nextDate }
    case types.PREVIOUS_WORRY:
      const previousDate = moment(state.date).subtract(1, 'day').toDate()
      return { worry: findWorry(previousDate), date: previousDate }
    default:
      return state
  }
}

export default worryCalendar
