import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
// Reducers
import { reducer as form } from 'redux-form';
import authReducer from '../modules/Auth/reducer'
import logs from '../modules/Logs/reducer'
// import headerReducer from '../modules/Header/reducer'

const middleware = [thunk]

const reducers = combineReducers({
  form,
  authReducer,
  logs,
  // headerReducer,
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
