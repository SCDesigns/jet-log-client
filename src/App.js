import React, { Component } from 'react';
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
        <div className="App">
            <Header />
          <div className="map">Map Here</div>
        </div>
  </MuiThemeProvider>
    );
  }
}

export default App;
