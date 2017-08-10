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

export const signup = (userDetails, router) => {
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
      const slug = body.user.email.split("@")[0];
      localStorage.setItem('e.jetlog.token', body.token)
      dispatch(setCurrentUser(body.user));
      dispatch(reset('signup'));
      router.history.replace(`/users/${slug}`);
    })
    .catch(err => {
      return err;
    })
  }
}

export const login = (userDetails, router) => {
  return dispatch => {
    dispatch(autheticationRequest)
    return fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
    .then(response => response.json())
    .then(body => {
      const slug = body.user.email.split("@")[0];
      localStorage.setItem('e.jetlog.token', body.token)
      dispatch(setCurrentUser(body.user));
      dispatch(reset('signup'));
      router.history.replace(`/users/${slug}`);
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}
