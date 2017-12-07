import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'

/*
  Action Creators
*/

const toggleInfo = (marker) => {
  return {
    type: 'TOGGLE_INFO_WINDOW',
    marker,
  }
}
