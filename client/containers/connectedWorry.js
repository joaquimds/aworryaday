import { connect } from 'react-redux'
import { nextWorry, previousWorry } from '../actions'
import Worry from '../components/worry'

const mapStateToProps = (state) => {
  return Object.assign({}, state.worryCalendar)
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextWorry: () => {
      dispatch(nextWorry())
    },
    previousWorry: () => {
      dispatch(previousWorry())
    }
  }
}

const ConnectedWorry = connect(
  mapStateToProps,
  mapDispatchToProps
)(Worry)

export default ConnectedWorry
