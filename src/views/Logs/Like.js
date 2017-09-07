import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton';

const API_URL = process.env.REACT_APP_API_URL;

class Like extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      like: 0
    }

    // this.handleOnChange = this.handleOnChange.bind(this)
  }

  // handleOnChange = (like) => {
  //   this.setState({
  //     like += 1;
  //   })
  // }

  handleApiCall = () => {
    console.log('a')

    fetch(`${API_URL}/logs`)
    .then(response => {
      console.log('b')
      return response.json()
    })
    .then((logs) => {console.log(logs, 'c')})

    console.log('d')
  }
  render(){
    return (
      <div>
        {/* <button onClick={this.handleOnChange}>Like</button> */}
        <button onClick={this.handleApiCall}>Api Call</button>
        <div>{this.state.like}</div>
      </div>
    )
  }
}

export default Like;
