import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {amber300} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  underlineStyle: {
    borderColor: amber300,
  },
};
const style = {
  textAlign: 'center',
  display: 'block',
  padding: '20px',
  height: '100vh',
};

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    this.props.Signup(user)
    this.setState({
      name: '',
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <Paper style={style} zDepth={2} >
        <form className="signup_form" method="POST">
          <label htmlFor="name" className="block">Name</label>
          <TextField
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
              underlineFocusStyle={styles.underlineStyle}
              hintText="John User"
            />
          <label htmlFor="signup_email" className="block">E-Mail</label>
          <TextField
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
              underlineFocusStyle={styles.underlineStyle}
              hintText="User@JetLog.com"
            />
          <label htmlFor="signup_password" className="block">Password</label>
          <TextField
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
              underlineFocusStyle={styles.underlineStyle}
              hintText="Password"
            />
            <br />
          <RaisedButton label="Create Account" type="submit" className="block"/>
        </form>
      </Paper>
    )
  }
}
export default Signup;
