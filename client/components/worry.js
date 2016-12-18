import React from 'react'

const Worry = ({ worry, previousWorry, nextWorry }) => (
  <div className="worry">
    <p>{worry}</p>
    <div className="btn-group">
      <button className="btn btn-secondary" onClick={previousWorry}>Previous Worry</button>
      <button className="btn btn-secondary" onClick={nextWorry}>Next Worry</button>
    </div>
  </div>
)

export default Worry
