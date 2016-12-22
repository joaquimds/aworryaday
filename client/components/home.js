import React from 'react'
import ConnectedLoginButton from '../containers/connectedLoginButton'
import ConnectedWorryCalendar from '../containers/connectedWorryCalendar'

const Home = () => (
  <div id='home' className="text-xs-center">
    <ConnectedLoginButton />
    <h1>A worry a day</h1>
    <h2>Gently nudging you towards the precipice</h2>
    <ConnectedWorryCalendar />
  </div>
)

export default Home
