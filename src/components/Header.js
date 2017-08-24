import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
// Material-UI - Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
// Material-UI - Icons
import NavigationClose from 'material-ui/svg-icons/navigation/close';
// Material-UI - Colors
import {red400} from 'material-ui/styles/colors';
import {tealA700} from 'material-ui/styles/colors';
// Route Manager
import PublicRoutes from '../containers/PublicRoutes';
import RouteManager from './RouteManager';
import Avatar from '../containers/Avatar';

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

          <Avatar />

          <Divider style={{backgroundColor: tealA700, height: '10px'}} />

          <Switch>
            <Route exact path="/" component={ PublicRoutes } />
            <Route path="/" component={ RouteManager } />
          </Switch>

        </Drawer>
      </div>
    )
  }
}

export default Header
