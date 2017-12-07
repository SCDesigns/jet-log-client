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

const updateLog = log => {
  return {
    type: 'UPDATE_LOG_SUCCESS',
    payload: log
  }
}

const destroyLog = id => {
  return {
    type: 'DELETE_LOG_SUCCESS',
    id: id
  }
}

// ** Async Actions **

export const getLogs = () => {
  return dispatch => {
    return fetch(`${API_URL}/logs`)
    .then(response => response.json())
    .then(logs => dispatch(setLogs(logs)))
    .catch((err) => {
     console.log(err)
     throw new SubmissionError(err)
   })
  }
}

export const createLog = (log) => {
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
      dispatch(addLog(log));
      dispatch(reset('new-log'));

    })
    .catch((err) => {
     console.log(err)
     throw new SubmissionError(err)
   })
  }
}

export const editLog = (log, history) => {
  return dispatch => {
    return fetch(`${API_URL}/logs/${log.props.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ log: log })
    })
    .then(response => response.json())
    .then(log => {
      dispatch(updateLog(log))
      dispatch(reset('new-log'))
      history.push('/my-logs')
    })
    .catch((err) => {
     console.log(err)
     throw new SubmissionError(err)
   })
  }
}

export const deleteLog = (log, history) => {
  return dispatch => {
    return fetch(`${API_URL}/logs/${log.id}`, {
      method: "DELETE"
    })
      .then(log => {
        dispatch(destroyLog(log.id))
        history.push('/my-logs')
      })
  }
}

export const incrementLikes = (log) => {
  // Trouble dispatching / when removed the update posts to the api when added nothing happens
  return dispatch => {
    const updatedLikes = log.likes + 1
    return fetch(`${API_URL}/logs/${log.id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify (
        {
          "log": { "likes": `${updatedLikes}` }
        }
      )
    })
    .then(response => response.json())
    .then(log => dispatch(updateLog(log)))
  }
}
