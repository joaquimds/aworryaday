import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './home'
import Admin from './admin'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Admin} />
  </Router>
)

export default App
