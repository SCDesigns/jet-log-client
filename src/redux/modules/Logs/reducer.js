const logsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_LOGS_SUCCESS':
      return action.logs;
    case 'CREATE_LOG_SUCCESS':
      let log = Object.assign({}, action.payload)
      return state.concat(log);
    case 'UPDATE_LOG_SUCCESS':
      return [
        ...state.filter(log => log.id !== action.log.id),
        Object.assign({}, action.log)
      ]
    case 'INCREMENT_LIKE':
      return state.map(log => {
          if (log.id === action.payload) {
            log.likes += 1;
            return log
          } else {
            return log
          }
      })

    case 'DELETE_LOG_SUCCESS':
      return state.filter(log => log.id !== action.id);
    default:
      return state;
  }
}

export default logsReducer;
