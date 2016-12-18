import React from 'react'
import { Link } from 'react-router'
import ConnectedWorryCalendar from '../containers/connectedWorryCalendar'

const Home = () => (
  <div id='home' className="text-xs-center">
    <div>
      <Link to="admin" className="btn btn-secondary float-xs-right">Worry Admin</Link>
      <h1>A worry a day</h1>
    </div>
    <h2>Gently nudging you towards the precipice</h2>
    <ConnectedWorryCalendar />
  </div>
)

export default Home
