import React, { Component } from 'react';
import { connect } from 'react-redux';
// Material-UI Components
import TextField from 'material-ui/TextField';
import {amber300} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { login } from '../../redux/modules/Auth/actions'

const styles = {
  underlineStyle: {
    borderColor: amber300,
  },
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    this.props.login(user, this.props.history);
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="center">
        <h2>Login</h2>
        <label htmlFor="login_email" className="block">E-Mail</label>
        <TextField
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            underlineFocusStyle={styles.underlineStyle}
            hintText="User@JetLog.com"
          />
        <label htmlFor="login_password" className="block">Password</label>
        <TextField
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            underlineFocusStyle={styles.underlineStyle}
            hintText="Password"
          />
          <br />
        <RaisedButton label="Login" type="submit" className="block"/>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
   };
}

export default connect(mapStateToProps, { login })(Login)
