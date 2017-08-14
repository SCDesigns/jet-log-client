import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// Material-UI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
// Nav Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import List from 'material-ui/svg-icons/action/list';
import NewLog from 'material-ui/svg-icons/communication/location-on';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PersonAdd from 'material-ui/svg-icons/social/person-add'
// Colors
import {amber300} from 'material-ui/styles/colors';
import {red400} from 'material-ui/styles/colors';
import {tealA700} from 'material-ui/styles/colors';
// Custom Module Imports
import AddLog from './AddLog'
import Home from '../views/Home'
import Login from '../views/Login'
import Logs from '../views/Logs/Logs'
import NotFound from '../views/NotFound'
import Signup from '../views/Signup'
// redux actions

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <div>
          <AppBar
            title='JetLog'
            style={{backgroundColor: tealA700}}
            titleStyle={{fontSize: '30px'}}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open} width={350}>

            <IconButton tooltip="Close">
              <NavigationClose
                onTouchTap={this.handleToggle}
                color={tealA700}
                hoverColor={red400}
              />
            </IconButton>

            <Divider style={{backgroundColor: tealA700, height: '10px'}} />

            <Router>
              <div>
                <Link to="/signup"><MenuItem primaryText="Sign Up"
                  leftIcon={<PersonAdd hoverColor={amber300}/>}
                /></Link>
                <Link to="/login"><MenuItem primaryText="Login"
                  leftIcon={<HomeIcon hoverColor={amber300}/>}
                /></Link>
                <Link to="/new-log"><MenuItem primaryText="New Log"
                  leftIcon={<NewLog hoverColor={amber300}/>}
                /></Link>
                <Link to="/my-logs"><MenuItem primaryText="My Logs"
                  leftIcon={<List hoverColor={amber300}/>}
                /></Link>

                <Divider style={{backgroundColor: tealA700, height: '10px'}} />

                <Switch>
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/new-log" component={AddLog} />
                  <Route exact path="/my-logs" component={Logs} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Router>

          </Drawer>
        </div>
      </div>
    )
  }
}

export default Header
