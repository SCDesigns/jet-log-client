import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
// Private Routes
import AddLog from './AddLog'
import Logs from '../views/Logs/Logs'

class AuthRouteValidator extends Component {

	componentDidMount(){
    const loggedIn = this.props.user.isAuthenticated;
		if(!loggedIn){
			this.props.history.push('/login');
		}
	}

	render() {
		return (
			<Switch>
        <Route exact path="/new-log" component={AddLog} />
        <Route exact path="/my-logs" component={Logs} />
			</Switch>
		)
	}
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, null)(AuthRouteValidator)
