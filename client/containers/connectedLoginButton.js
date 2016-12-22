import { connect } from 'react-redux'
import { requestAdmin, changePassword, login, logout } from '../actions'
import LoginButton from '../components/loginButton'

const mapStateToProps = (state) => {
  return Object.assign({}, state.loginButton)
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestAdmin: () => {
      dispatch(requestAdmin())
    },
    onChangePassword: password => {
      dispatch(changePassword(password))
    },
    onClickLogin: password => {
      dispatch(login(password))
    },
    onClickLogout: () => {
      dispatch(logout())
    }
  }
}

const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton)

export default ConnectedLoginForm
