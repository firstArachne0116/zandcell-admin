import * as api from '../../../api';
import * as actionApi from './api.actions';
import * as actionNotification from './notification.actions';

export const DOC_TYPES = '[REQ] DOC_TYPES';

// export const UPDATE_TOKEN = '[AUTH] UPDATE TOKEN';
// export const SET_ACCOUNT_AVATAR = '[AUTH] SET ACCOUNT AVATAR';
// export const SET_ACCOUNT_BALANCE = '[AUTH] SET ACCOUNT BALANCE';

export const getDocTypes = (author = 'all') => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.getDocTypes(author).then((result) => {
    console.log('doctypes', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: DOC_TYPES, payload: result.data.type });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[get doctypes error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};
