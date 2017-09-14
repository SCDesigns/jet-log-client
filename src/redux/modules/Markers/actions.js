import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'

const API_URL = process.env.REACT_APP_API_URL;

/*
  Action Creators
*/

const setMarkers = (markers, logs) => {
  return {
    type: 'GET_MARKERS_SUCCESS',
    markers,
    logs
  }
}

// ** Async Actions **

export const getLogs = () => {
  return dispatch => {
    return fetch(`${API_URL}/logs`)
    .then(response => response.json())
    .then(logs => dispatch(setMarkers(logs)))
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}

// this.setState({ markers: data.photos });
