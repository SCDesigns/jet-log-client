import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './containers/Header'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router>
        <div className="App">
          <Header />
          <div className="map">Map Here</div>
        </div>
      </Router>
  </MuiThemeProvider>
    );
  }
}

export default App;
