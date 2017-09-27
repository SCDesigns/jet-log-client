import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
// Reducers
import authReducer from '../modules/Auth/reducer'
import logsReducer from '../modules/Logs/reducer'

const reducers = combineReducers({
  user: authReducer,
  logs: logsReducer,
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
