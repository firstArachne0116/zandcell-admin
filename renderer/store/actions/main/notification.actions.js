// import * as api from '../../../api';

export const SHOW_NOTIFICATION = '[NOTIFICATION] SHOW NOTIFICATION';
export const HIDE_NOTIFICATION = '[NOTIFICATION] HIDE NOTIFICATION';
export const SET_LOADING = '[NOTIFICATION] SET LOADING';

export const showNotification = (notificationContent) => ({
  type: SHOW_NOTIFICATION,
  notificationContent
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading
});
