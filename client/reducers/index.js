import { combineReducers } from 'redux'
import worryCalendar from './worryCalendar'
import worryForm from './worryForm'

let root = combineReducers({ worryCalendar, worryForm })

export default root
