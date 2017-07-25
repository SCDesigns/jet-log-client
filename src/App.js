import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logs from './components/Logs'
import AddLog from './components/AddLog'
import LogService from './services/LogService'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logs: []
    }
  }

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
        <div className="App">
          <h1>JetLog</h1>
          <div className="navbar">
            <div className="recentLogs">
              <Logs logs={this.state.logs}/>
              {/*<Route path='/logs' component={Logs} />*/}
            </div>
            <div className="addLog">
              <AddLog addLog={this.addLog}/>
              {/*<Route path='/addLog' component={AddLog} />*/}
            </div>
          </div>
          <div className="map">
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
