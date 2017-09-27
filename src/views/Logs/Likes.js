import React from 'react'
import { connect } from 'react-redux';
import { incrementLikes } from '../../redux/modules/Logs/actions'

class Likes extends React.Component {

  handleIncrement = () => {
    incrementLikes(this.props.log)
    this.setState({
      likes: this.props.likes,
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.handleIncrement}>{this.props.likes}</button>
      </div>
    )
  }
}

export default connect(null, { incrementLikes })(Likes)
