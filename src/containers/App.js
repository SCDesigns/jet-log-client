import React, { Component } from 'react';
import Header from './Header'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';

class App extends Component {

  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div className="App">
              <Header />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
