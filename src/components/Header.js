import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
// Material-UI - Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
// Material-UI - Nav Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import List from 'material-ui/svg-icons/action/list';
import NewLog from 'material-ui/svg-icons/communication/location-on';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PersonAdd from 'material-ui/svg-icons/social/person-add'
// Material-UI - Colors
import {amber300} from 'material-ui/styles/colors';
import {red400} from 'material-ui/styles/colors';
import {tealA700} from 'material-ui/styles/colors';
// Public Route - Welcome
import Home from '../views/Home'
// Route Manager
import RouteManager from './RouteManager.js'

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
                  <Route exact path="/" component={Home} />
                  <Route path="/" component={RouteManager} />
                </Switch>
              </div>

          </Drawer>
        </div>
      </div>
    )
  }
}

export default Header
