import { connect } from 'react-redux'
import { changeWorryFormDate, changeWorryFormWorry, updateWorry } from '../actions'
import WorryForm from '../components/worryForm'

const mapStateToProps = (state) => {
  return Object.assign({}, state.worryForm)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeDate: (date) => {
      dispatch(changeWorryFormDate(date))
    },
    onChangeWorry: (worry) => {
      dispatch(changeWorryFormWorry(worry))
    },
    onSubmit: (date, worry) => {
      dispatch(updateWorry(date, worry))
    }
  }
}

const ConnectedWorryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorryForm)

export default ConnectedWorryForm
