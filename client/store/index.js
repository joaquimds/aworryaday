import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import { getWorry } from '../actions'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
Store.dispatch(getWorry())

export default Store
