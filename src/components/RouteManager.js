import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// Validator
import PublicRoutes from '../containers/PublicRoutes';
import AuthRouteValidator from '../containers/AuthRouteValidator'
// Public Routes
import NotFound from '../views/NotFound'

class RouteManager extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/signup" component={PublicRoutes} />
					<Route exact path="/login" component={PublicRoutes} />
          <Route path="/new-log" component={AuthRouteValidator} />
          <Route path="/my-logs" component={AuthRouteValidator} />
          <Route component={NotFound} />
				</Switch>
			</div>
		)
	}
}

export default RouteManager
