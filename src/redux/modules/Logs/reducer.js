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
      // return [
      //   ...state.slice(0, log.id),
      //   {...state[log.id], likes: state[log.id].likes + 1},
      //   ...state.slice(log.id + 1),
      // ];
    case 'DELETE_LOG_SUCCESS':
      return state.filter(log => log.id !== action.id);
    case 'INCREMENT_LIKE':
    if (log.id === action.payload) {
      log.likes += 1;
      return log
    } else {
      return log
    }
    default:
      return state;
  }
}

export default logsReducer;
