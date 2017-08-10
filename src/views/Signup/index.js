import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {amber300} from 'material-ui/styles/colors';

import { signup } from '../../redux/modules/Auth/actions'

const styles = {
  underlineStyle: {
    borderColor: amber300,
  },
};

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
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
    this.props.signup(user);
    this.setState({
      name: '',
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="center">
        <h2>Create Account</h2>
        <label htmlFor="register_name" className="block">Name</label>
        <TextField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            underlineFocusStyle={styles.underlineStyle}
            hintText="John User"
          />
        <label htmlFor="register_email" className="block">E-Mail</label>
        <TextField
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            underlineFocusStyle={styles.underlineStyle}
            hintText="User@JetLog.com"
          />
        <label htmlFor="register_password" className="block">Password</label>
        <TextField
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            underlineFocusStyle={styles.underlineStyle}
            hintText="Password"
          />
          <br />
        <RaisedButton label="Submit" type="submit" className="block"/>
      </form>
    )
  }
}

export default connect(null, { signup })(Signup)
