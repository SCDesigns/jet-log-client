import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogCard from './LogCard'
import { getLogs } from '../../redux/modules/Logs/actions';


class Logs extends Component {

  componentDidMount() {
    this.props.getLogs()
  }

  render() {
    return (
      <div>
        <h1 className="center">My Logs</h1>
        {this.props.logs.map(log =>
          <LogCard key={log.id} log={log} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    logs: state.logs
  })
}

export default connect(mapStateToProps, { getLogs })(Logs);
