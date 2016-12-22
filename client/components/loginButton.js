import React from 'react'
import { Link } from 'react-router'
import { states } from '../reducers/loginButton'

const createSubmitHandler = (handler, password) => {
  return e => {
    e.preventDefault()
    handler(password)
  }
}

const LoginButton = ({ state, password, loading, requestAdmin, onChangePassword, onClickLogin, onClickLogout }) => {
  let contents
  switch (state) {
    case states.LOGGED_IN:
      contents = (
        <div>
          <button className="btn btn-secondary" onClick={onClickLogout}>Log Out</button>
          <Link to="admin" className="btn btn-secondary ml-1">Worry Admin</Link>
        </div>
      )
      break
    case states.LOGGING_IN:
      contents = (
        <form className="form-inline" onSubmit={createSubmitHandler(onClickLogin, password)}>
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => onChangePassword(e.target.value)} />
          <button className="btn btn-secondary ml-1" disabled={loading}>Log In</button>
        </form>
      )
      break
    default:
      contents = <button className="btn btn-secondary" onClick={requestAdmin}>Worry Admin</button>
      break
  }
  return (
    <div id="login-button" className="text-xs-right">
      {contents}
    </div>
  )
}

export default LoginButton
