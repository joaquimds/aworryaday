import moment from 'moment'
import types from '../actions/types'
import { getWorry, setWorry } from '../worries'

const initialState = { date: moment().format('YYYY-MM-DD') }
initialState.worry = getWorry(initialState.date)

const worryForm = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_WORRY_FORM_DATE:
      return Object.assign({}, state, { date: action.date, worry: getWorry(action.date) })
    case types.CHANGE_WORRY_FORM_WORRY:
      return Object.assign({}, state, { worry: action.worry })
    case types.UPDATE_WORRY:
      setWorry(state.date, state.worry)
      return state
    default:
      return state
  }
}

export default worryForm
