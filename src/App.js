import React, { Component } from 'react';
import Logs from './components/Logs'
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
    LogService.fetchLogs().then(logs => this.setState({ logs })
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Jet Log</h1>
        <div className="navbar">
          <Logs logs={this.state.logs}/>
        </div>
        <div className="map">
          <p>Here</p>
        </div>
      </div>
    );
  }
}

export default App;
