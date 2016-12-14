import React from 'react'
import ConnectedWorry from '../containers/connectedWorry'

const App = () => (
  <div className="container pt-1 pb-1 text-xs-center">
    <h1>A worry a day</h1>
    <h2>Gently nudging you towards the precipice</h2>
    <ConnectedWorry />
  </div>
)

export default App
