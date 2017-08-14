import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {amber300} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  underlineStyle: {
    borderColor: amber300,
  },
};

class AddLog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      location: '',
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
    const log = this.state;
    this.props.addLog(log)
    this.setState({
      title: '',
      description: '',
      location: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="center">
        <h2>New Log</h2>
        <label htmlFor="log_title" className="block">Title</label>
        <TextField
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
            hintText="eg: How To Hong Kong"
            underlineFocusStyle={styles.underlineStyle}
          />

        <label htmlFor="log_description" className="block">Description</label>
        <TextField
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
            hintText="eg: What an amazing few days..."
            underlineFocusStyle={styles.underlineStyle}
            multiLine={true}
          />

        <label htmlFor="log_location" className="block">Location</label>
        <TextField
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleOnChange}
            hintText="eg: Hong Kong, China"
            underlineFocusStyle={styles.underlineStyle}
          />

          <RaisedButton label="Create New Log" type="submit" className="block"/>
      </form>
    )
  }
}

export default AddLog
