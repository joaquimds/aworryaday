import { connect } from 'react-redux'
import { getWorry } from '../actions'
import WorryCalendar from '../components/worryCalendar'

const mapStateToProps = (state) => {
  return Object.assign({}, state.worryCalendar)
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWorry: (date) => {
      dispatch(getWorry(date))
    }
  }
}

const ConnectedWorryCalendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorryCalendar)

export default ConnectedWorryCalendar
