import { connect } from 'react-redux'
import { changeWorryFormDate, changeWorryFormWorry, updateWorry } from '../actions'
import WorryForm from '../components/WorryForm'

const mapStateToProps = (state) => {
  return Object.assign({}, state.worryForm)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeDate: (e) => {
      dispatch(changeWorryFormDate(e.target.value))
    },
    onChangeWorry: (e) => {
      dispatch(changeWorryFormWorry(e.target.value))
    },
    onSubmit: (e, date, worry) => {
      e.preventDefault()
      dispatch(updateWorry(date, worry))
    }
  }
}

const ConnectedWorryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorryForm)

export default ConnectedWorryForm
