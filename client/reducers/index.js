import types from '../actions/types'
import randomWorry from '../worries'

const root = (state = {}, action) => {
  switch (action.type) {
    case types.NEW_WORRY:
      return { worry: randomWorry() }
    default:
      return state
  }
}

export default root
