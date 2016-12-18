import React from 'react'
import { Link } from 'react-router'
import ConnectedWorryForm from '../containers/connectedWorryForm'

const Admin = () => (
  <div id="admin">
    <Link to="/" className="float-xs-right btn btn-secondary">Back to Worries</Link>
    <h1>Worry Admin</h1>
    <ConnectedWorryForm />
  </div>
)

export default Admin
