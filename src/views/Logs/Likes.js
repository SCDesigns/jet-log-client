import React from 'react'
import { connect } from 'react-redux';
import { increment } from '../../redux/modules/Likes/actions'

class Likes extends React.Component {

  handleIncrement = () => {
    this.props.increment(this.props.logId)
  }

  render(){
    return (
      <div>
        <button onClick={this.handleIncrement}>{this.props.likes}</button>
      </div>
    )
  }
}


export default connect(null, { increment })(Likes)
