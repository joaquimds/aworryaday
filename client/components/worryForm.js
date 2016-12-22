import React from 'react'

const createSubmitHandler = (onSubmit, date, worry) => {
  return (e) => {
    e.preventDefault()
    onSubmit(date, worry)
  }
}

const WorryForm = ({ date, worry, loading, onChangeDate, onChangeWorry, onSubmit }) => (
  <form onSubmit={createSubmitHandler(onSubmit, date, worry)}>
    <div className="form-group row">
      <label htmlFor="date" className="col-xs-1 col-form-label">Date</label>
      <div className="col-xs-11">
        <input id="date" className="form-control" type="date" value={date} onChange={e => onChangeDate(e.target.value)} />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="worry" className="col-xs-1 col-form-label">Worry</label>
      <div className="col-xs-11">
        <input id="worry" className="form-control" type="text" value={worry} onChange={e => onChangeWorry(e.target.value)} />
      </div>
    </div>
    <button className="btn btn-secondary float-xs-right" disabled={loading}>Submit</button>
  </form>
)

export default WorryForm
