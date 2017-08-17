import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// Custom Module Imports (Routes)
// Validator
import AuthRouteValidator from '../containers/AuthRouteValidator'
// Public Routes
import Login from '../views/Login'
import Signup from '../views/Signup'
import NotFound from '../views/NotFound'

class RouteManager extends Component {
	render() {
		return (
			<div>
				<Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route path="/new-log" component={AuthRouteValidator} />
          <Route path="/my-logs" component={AuthRouteValidator} />
          <Route component={NotFound} />
				</Switch>
			</div>
		)
	}
}

export default RouteManager
