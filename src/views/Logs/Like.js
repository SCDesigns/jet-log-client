import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';

const API_URL = process.env.REACT_APP_API_URL;

class Like extends React.Component {
  constructor(){
    super();

    this.state = { like: 0 }
    this.increment = this.increment.bind(this)
  }
  increment(){
    this.setState({ like: this.state.like + 1})
  }

  // handleApiCall = () => {
  //   console.log('a')
  //
  //   fetch(`${API_URL}/logs`)
  //   .then(response => {
  //     console.log('b')
  //     return response.json()
  //   })
  //   .then((logs) => {console.log(logs, 'c')})
  //
  //   console.log('d')
  // }

  render(){
    console.log('render')
    return (
      <div>
        {/* <button onClick={this.handleApiCall}>Api Call</button> */}
        <button onClick={this.increment}>{this.state.like}</button>
      </div>
    )
  }
}

export default Like;
