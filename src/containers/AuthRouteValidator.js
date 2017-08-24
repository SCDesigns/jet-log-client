import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
// Material-UI
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
// Material-UI - Nav Icons
import List from 'material-ui/svg-icons/action/list';
import NewLog from 'material-ui/svg-icons/communication/location-on';
// Colors
import {amber300} from 'material-ui/styles/colors';
import {tealA700} from 'material-ui/styles/colors';
// Private Routes
import AddLog from './AddLog'
import Logs from '../views/Logs/Logs'

class AuthRouteValidator extends Component {

	componentDidMount(){
    const loggedIn = this.props.user.isAuthenticated;
		if(!loggedIn){
			this.props.history.push('/login');
			alert("You must be logged in to access this.")
		}
	}

	render() {
		return (
			<div>
				<Link to="/new-log"><MenuItem primaryText="New Log"
					leftIcon={<NewLog hoverColor={amber300}/>}
				/></Link>
				<Link to="/my-logs"><MenuItem primaryText="My Logs"
					leftIcon={<List hoverColor={amber300}/>}
				/></Link>

				<Divider style={{backgroundColor: tealA700, height: '10px'}} />

				<Switch>
	        <Route exact path="/new-log" component={AddLog} />
	        <Route exact path="/my-logs" component={Logs} />
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
