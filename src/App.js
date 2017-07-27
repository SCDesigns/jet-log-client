import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './containers/Header'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logs: []
    }
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div className="App">
            <Header />
            <div className="Map">Map Here
            </div>
          </div>
        </MuiThemeProvider>
    </Router>
    );
  }
}

export default App;
