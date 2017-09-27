import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogCard from './LogCard'
import { getLogs } from '../../redux/modules/Logs/actions';


class Logs extends Component {

  componentDidMount() {
    this.props.getLogs()
  }

  render() {

    const logList = this.props.logs.map((log, index) =>
      <LogCard key={index} log={log} />
    )
    console.log(logList)

    return (
      <div>
        <h1 className="center">My Logs</h1>
        {logList.sort((a,b) => {
          console.log(a)
          return a.props.log.likes - b.props.log.likes
        })}
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
