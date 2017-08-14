import React, { Component } from 'react';
import { connect } from 'react-redux';
// Material-UI
import ContentAdd from 'material-ui/svg-icons/image/add-a-photo';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {amber300} from 'material-ui/styles/colors';
// Redux Actions
import { createLog } from '../redux/modules/Logs/actions'

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
      memory: '',
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
    const log = this.state;
    this.props.createLog(log)
    this.setState({
      title: '',
      description: '',
      location: '',
      memory: '',
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

        <label htmlFor="log_location" className="block">Image URL</label>
        <TextField
          type="text"
          name="memory"
          value={this.state.memory}
          onChange={this.handleOnChange}
          hintText="eg: http://somesite/images/hong-kong.jpg"
          underlineFocusStyle={styles.underlineStyle}
          multiLine={true}
        />

        <RaisedButton label="Create New Log" type="submit" className="block"/>
      </form>
    )
  }
}

export default connect(null, { createLog })(AddLog)
