import React, { Component } from 'react'
import { connect } from 'react-redux';
// Private Routes

class Avatar extends Component {

	render(props) {
		return (
			<div>
        <h3 className="center">{this.props.user.currentUser.name}</h3>
      </div>
		)
	}
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, null)(Avatar)
