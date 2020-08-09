import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import notificationReducer from './notification.reducer';
import requestReducer from './request.reducer';
import apiReducer from './api.reducer';

const mainReducers = combineReducers({
  authReducer,
  apiReducer,
  requestReducer,
  notificationReducer,
});

export default mainReducers;
