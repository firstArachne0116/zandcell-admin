import * as api from '../../../api';
import * as actionApi from './api.actions';
import * as actionNotification from './notification.actions';

export const DOC_TYPES = '[REQ] DOC_TYPES';
export const ADD_DOC_TYPE = '[REQ] ADD_DOC_TYPE';
export const UPDATE_DOC_TYPE = '[REQ] UPDATE_DOC_TYPE';
export const DELETE_DOC_TYPE = '[REQ] DELETE_DOC_TYPE';

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

export const getAllDocTypes = () => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.getAllDocTypes().then((result) => {
    console.log('doctypes', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: DOC_TYPES, payload: result.data.types });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[get doctypes error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const addDocType = (docType) => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.addDocType(docType).then((result) => {
    console.log('new doctype', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: ADD_DOC_TYPE, payload: result.data.type });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[add doctype error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const updateDocType = (docType) => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.updateDocType(docType).then((result) => {
    console.log('updated doctype', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: UPDATE_DOC_TYPE, payload: result.data.type });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[update doctype error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};


export const deleteDocType = (_id) => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.deleteDocType({ _id }).then((result) => {
    console.log('delete doctype', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: DELETE_DOC_TYPE, payload: _id });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[delete doctype error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};
