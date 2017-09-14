const markersReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_MARKERS_SUCCESS':
      return action.markers;
    case 'CREATE_MARKER_SUCCESS':
      let marker = Object.assign({}, action.payload)
      return state.concat(marker);
    default:
      return state;
  }
}

export default logsReducer;
