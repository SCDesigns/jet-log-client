import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'

const API_URL = process.env.REACT_APP_API_URL;

/*
  Action Creators
*/

const setLogs = logs => {
  return {
    type: 'GET_LOGS_SUCCESS',
    logs
  }
}

const addLog = log => {
  return {
    type: 'CREATE_LOG_SUCCESS',
    log
  }
}

// ** Async Actions **
export const getLogs = () => {
  return dispatch => {
    return fetch(`${API_URL}/logs`)
    .then(response => response.json())
    .then(logs => dispatch(setLogs(logs)))
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}

export const createLog = log => {
  return dispatch => {
    return fetch(`${API_URL}/logs`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ log: log })
    })
    .then(response => response.json())
    .then(log => {
      dispatch(addLog(log))
      dispatch(reset('new-log'))
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}

// export const deleteLog = (log, routerHistory) => {
//   const id = log.id
//   return dispatch => {
//     return LogService.deleteLog(log)
//       .then(log => {
//         dispatch(destroyLog(id))
//         routerHistory.push('/');
//       })
//   }
// }
//
// const destroyLog = id => {
//   return {
//     type: 'SUCESSFUL_DELETE_LOG',
//     id: id
//   }
// }
