import moment from 'moment'
import types from '../actions/types'

const initialState = { loading: true, date: moment().format('YYYY-MM-DD'), worry: '' }

const worryForm = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_WORRY_FORM_DATE:
      return Object.assign({}, state, { date: action.date, loading: true })
    case types.GET_WORRY_SUCCESS:
      return Object.assign({}, state, { date: action.date, worry: action.worry, loading: false })
    case types.GET_WORRY_FAILURE:
      return Object.assign({}, state, { worry: '', date: action.date, loading: false })
    case types.CHANGE_WORRY_FORM_WORRY:
      return Object.assign({}, state, { worry: action.worry })
    case types.UPDATE_WORRY:
      return Object.assign({}, state, { loading: true })
    case types.UPDATE_WORRY_SUCCESS:
      return Object.assign({}, state, { loading: false })
    default:
      return state
  }
}

export default worryForm
