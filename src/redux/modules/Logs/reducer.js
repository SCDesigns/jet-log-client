const logsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_LOGS_SUCCESS':
      return action.logs;
    case 'CREATE_LOG_SUCCESS':
      let log = Object.assign({}, action.payload)
      return state.concat(log);
    case 'UPDATE_LOG_SUCCESS':
      const newState = state.map(l => {
        if (l.id === action.payload.id) {
          return action.payload
        } else {
          return l
        }
      })
      return newState
    case 'DELETE_LOG_SUCCESS':
      return state.filter(log => log.id !== action.id);
    default:
      return state;
  }
}

export default logsReducer;
