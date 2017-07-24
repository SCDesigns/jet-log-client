import React, { Component } from 'react';
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
      <div className="App">
        <h1>Jet Log</h1>
        <div className="navbar">
          <div className="recentLogs">
            <Logs logs={this.state.logs}/>
          </div>
          <div className="addLog">
            <AddLog addLog={this.addLog}/>
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
