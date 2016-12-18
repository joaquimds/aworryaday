import React from 'react'

const WorryForm = ({ date, worry, onChangeDate, onChangeWorry, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className="form-group row">
      <label htmlFor="date" className="col-xs-1 col-form-label">Date</label>
      <div className="col-xs-11">
        <input id="date" className="form-control" type="date" value={date} onChange={onChangeDate}/>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="worry" className="col-xs-1 col-form-label">Worry</label>
      <div className="col-xs-11">
        <input id="worry" className="form-control" type="text" value={worry} onChange={onChangeWorry}/>
      </div>
    </div>
    <button className="btn btn-secondary float-xs-right">Submit</button>
  </form>
)

export default WorryForm