import React, { Component } from 'react';

class AddLog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      user: '',
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
      user: '',
      location: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="log_title">Title</label>
        <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
            placeholder="Log Title"
          />

        <label htmlFor="log_description">Description</label>
        <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
            placeholder="Description"
          />

        <label htmlFor="location">Location</label>
        <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleOnChange}
            placeholder="Location"
          />

          <button>Create New Log</button>
      </form>
    )
  }
}

export default AddLog
