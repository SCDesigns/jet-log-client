import React from 'react';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Logs from '../components/Logs'
import AddLog from '../components/AddLog'
import LogService from '../services/LogService'
import {blueA400} from 'material-ui/styles/colors';
import {red800} from 'material-ui/styles/colors';

const Signup = () => <form className="signup_form"></form>
const Home = () => <div>Home</div>
const NotFound = () => <div>NotFound</div>

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      logs: []
    };
  }
  handleToggle = () => this.setState({open: !this.state.open});

  componentDidMount(){
    LogService.fetchLogs().then(logs => this.setState({ logs }))
  }

  addLog = (log) => {
    LogService.createLog(log).then(log => this.setState({
      logs: this.state.logs.concat(log)
    }))
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <AppBar
              title='JetLog'
              className="center"
              style={{backgroundColor: blueA400}}
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer open={this.state.open} width={350}>
              <IconButton tooltip="Close">
                <NavigationClose onTouchTap={this.handleToggle} color={blueA400} hoverColor={red800}/>
              </IconButton>
              <Divider style={{backgroundColor: blueA400, height: '10px'}} />

              <Link to="/signup" ><MenuItem primaryText="Sign Up" leftIcon={<PersonAdd />} /></Link>
              <Link to="/" ><MenuItem primaryText="Home" leftIcon={<HomeIcon />} /></Link>

              {/* <Divider style={{backgroundColor: blueA400, height: '10px'}} />
              <Logs logs={this.state.logs}/> */}

              <Divider style={{backgroundColor: blueA400, height: '10px'}} />
              <AddLog addLog={this.addLog}/>
            </Drawer>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Header
