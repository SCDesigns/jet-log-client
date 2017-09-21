export const increment = logId => {
  return {
    type: 'INCREMENT_LIKE',
    payload: logId
  }
}
