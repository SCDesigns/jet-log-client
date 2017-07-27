import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Logs from '../components/Logs'
import AddLog from '../components/AddLog'
import LogService from '../services/LogService'
import {blueA400} from 'material-ui/styles/colors';
import {red800} from 'material-ui/styles/colors';

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
          <Logs logs={this.state.logs}/>
          <Divider style={{backgroundColor: blueA400, height: '10px'}} />
          <AddLog addLog={this.addLog}/>
        </Drawer>
      </div>
    )
  }
}

export default Header
