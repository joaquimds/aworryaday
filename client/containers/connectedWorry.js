import { connect } from 'react-redux'
import { newWorry } from '../actions'
import Worry from '../components/worry'

const mapStateToProps = (state) => {
  return {
    worry: state.worry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newWorry: () => {
      dispatch(newWorry())
    }
  }
}

const ConnectedWorry = connect(
  mapStateToProps,
  mapDispatchToProps
)(Worry)

export default ConnectedWorry
