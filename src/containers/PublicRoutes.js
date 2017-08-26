import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
// Material-UI
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
// Material-UI - Nav Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
// Colors
import {amber300} from 'material-ui/styles/colors';
import {blueGrey800} from 'material-ui/styles/colors';
// Public Routes
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';

class AuthRouteValidator extends Component {

	render() {
		return (
			<div>
        <Link to="/signup"><MenuItem primaryText="Sign Up"
          leftIcon={<PersonAdd hoverColor={amber300}/>}
        /></Link>
        <Link to="/login"><MenuItem primaryText="Login"
          leftIcon={<HomeIcon hoverColor={amber300}/>}
        /></Link>

				<Divider style={{backgroundColor: blueGrey800, height: '10px'}} />

				<Switch>
					<Route exact path="/" component={Home} />
	        <Route exact path="/signup" component={Signup} />
	        <Route exact path="/login" component={Login} />
				</Switch>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, null)(AuthRouteValidator)
