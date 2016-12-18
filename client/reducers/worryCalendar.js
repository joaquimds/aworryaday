import types from '../actions/types'

const initialState = { loading: true }

const worryCalendar = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WORRY:
      return Object.assign({}, state, { loading: true })
    case types.GET_WORRY_SUCCESS:
      return Object.assign({}, state, { worry: action.worry, date: action.date, loading: false })
    case types.GET_WORRY_FAILURE:
      return Object.assign({}, state, { worry: 'Failed', date: action.date, loading: false })
    default:
      return state
  }
}

export default worryCalendar
