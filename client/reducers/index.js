import { combineReducers } from 'redux'
import worryCalendar from './worryCalendar'
import worryForm from './worryForm'
import loginButton from './loginButton'

let root = combineReducers({ worryCalendar, worryForm, loginButton })

export default root
