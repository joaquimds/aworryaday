import React from 'react'

const Worry = ({ worry, newWorry }) => (
  <div className="worry">
    <p>{worry}</p>
    <button className="btn btn-secondary" onClick={newWorry}>Get Another</button>
  </div>
)

export default Worry
