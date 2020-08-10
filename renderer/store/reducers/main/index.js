import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import notificationReducer from './notification.reducer';
import settingReducer from './setting.reducer';
import requestReducer from './request.reducer';
import apiReducer from './api.reducer';

const mainReducers = combineReducers({
  authReducer,
  apiReducer,
  settingReducer,
  notificationReducer,
  requestReducer,
});

export default mainReducers;
