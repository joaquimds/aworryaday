import 'whatwg-fetch'
import moment from 'moment'
import { takeEvery, takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { getWorrySuccess, getWorryFailure, updateWorrySuccess, loginSuccess, loginFailure } from '../actions'
import types from '../actions/types'

function * updateWorry (action) {
  yield window.fetch(
    `/api/worries/${action.date}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({ worry: action.worry }),
      credentials: 'include'
    }
  )
  yield put(updateWorrySuccess(action.date, action.worry))
}

function * getWorry (action) {
  const date = action.date || moment().format('YYYY-MM-DD')
  const res = yield window.fetch(`/api/worries/${date}`)
  if (res.ok) {
    const worry = yield res.text()
    yield put(getWorrySuccess(date, worry))
  } else {
    yield put(getWorryFailure(date))
  }
}

function * login (action) {
  const res = yield window.fetch(
    '/api/auth/login',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ username: 'james', password: action.password }),
      credentials: 'include'
    }
  )
  if (res.ok) {
    yield put(loginSuccess())
  } else {
    yield put(loginFailure())
  }
}

function * logout () {
  window.fetch(
    '/api/auth/logout',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      credentials: 'include'
    }
  )
}

function * rootSaga () {
  yield takeEvery(types.UPDATE_WORRY, updateWorry)
  yield takeEvery(types.GET_WORRY, getWorry)
  yield takeLatest(types.LOGIN, login)
  yield takeLatest(types.LOGOUT, logout)
  yield takeLatest(types.CHANGE_WORRY_FORM_DATE, getWorry)
}

export default rootSaga
