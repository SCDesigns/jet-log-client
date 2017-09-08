import React from 'react'
import { connect } from 'react-redux';
import { increment } from '../../redux/modules/Likes/actions'

class Likes extends React.Component {

  render(){
    return (
      <div>
        <button onClick={this.props.increment}>{this.props.likes}</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    likes: state.likes
  }
}

export default connect(mapStateToProps, { increment })(Likes)
