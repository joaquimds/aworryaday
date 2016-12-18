import 'whatwg-fetch'
import moment from 'moment'
import { takeEvery, takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { getWorrySuccess, getWorryFailure, updateWorrySuccess } from '../actions'
import types from '../actions/types'

function * updateWorry (action) {
  yield window.fetch(
    `/api/worries/${moment(action.date).format('YYYY-MM-DD')}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({ text: action.worry })
    }
  )
  yield put(updateWorrySuccess(action.date, action.worry))
}

function * getWorry (action) {
  const date = moment(action.date)
  if (date.isValid()) {
    const dateString = date.format('YYYY-MM-DD')
    const res = yield window.fetch(`/api/worries/${dateString}`)
    if (res.ok) {
      const worry = yield res.text()
      yield put(getWorrySuccess(dateString, worry))
    } else {
      yield put(getWorryFailure(dateString))
    }
  }
}

function * rootSaga () {
  yield takeEvery(types.UPDATE_WORRY, updateWorry)
  yield takeEvery(types.GET_WORRY, getWorry)
  yield takeLatest(types.CHANGE_WORRY_FORM_DATE, getWorry)
}

export default rootSaga
