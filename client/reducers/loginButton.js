import types from '../actions/types'

export const states = {
  LOGGING_IN: 'loggingIn',
  LOGGED_IN: 'loggedIn'
}

const worryForm = (state = { password: '' }, action) => {
  switch (action.type) {
    case types.REQUEST_ADMIN:
      return Object.assign({}, state, { state: states.LOGGING_IN })
    case types.CHANGE_PASSWORD:
      return Object.assign({}, state, { password: action.password })
    case types.LOGIN:
      return Object.assign({}, state, { loading: true })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { password: '', loading: false, state: states.LOGGED_IN })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, { loading: false })
    case types.LOGOUT:
      return Object.assign({}, state, { state: null })
    default:
      return state
  }
}

export default worryForm
