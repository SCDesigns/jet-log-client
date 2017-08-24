import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'

const API_URL = process.env.REACT_APP_API_URL;

/*
  Action Creators
*/

export const autheticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = user => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}
/*
  Async Actions
*/

export const signup = (userDetails, history) => {
  return dispatch => {
    dispatch(autheticationRequest)
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
    .then(response => response.json())
    .then(body => {
      localStorage.setItem('e.jetlog.token', body.token)
      dispatch(setCurrentUser(body.user));
      dispatch(reset('signup'));
      history.push('/my-logs')
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}

export const login = (userDetails, history) => {
  return dispatch => {
    dispatch(autheticationRequest)
    return fetch(`${API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
    .then(response => response.json())
    .then(body => {
      localStorage.setItem('e.jetlog.token', body.token)
      dispatch(setCurrentUser(body.user));
      dispatch(reset('login'));
      history.push('/my-logs')
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}
