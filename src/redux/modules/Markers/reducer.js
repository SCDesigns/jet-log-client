const markersReducer = (state = [], action) => {
  switch(action.type) {
    case 'TOGGLE_INFO_WINDOW':
      const newState = state.map(marker => {
        if (marker.id === action.payload.id) {
          action.payload.isOpen = !this.state.isOpen;
          return action.payload
        } else {
          return marker
        }
      })
    default:
      return state;
  }
}

export default markersReducer;
