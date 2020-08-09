import * as api from '../../../api';
import * as actionApi from './api.actions';
import * as actionNotification from './notification.actions';

export const DOC_TYPES = '[DOC] DOC_TYPES';
export const ADD_DOC_TYPE = '[DOC] ADD_DOC_TYPE';
export const UPDATE_DOC_TYPE = '[DOC] UPDATE_DOC_TYPE';
export const DELETE_DOC_TYPE = '[DOC] DELETE_DOC_TYPE';

export const SET_USERS = '[USER] SET USERS';
export const ADD_USER = '[USER] ADD_USER';
export const UPDATE_USER = '[USER] UPDATE_USER';
export const DELETE_USER = '[USER] DELETE_USER';

export const getDocTypes = (author = 'all') => (dispatch) => {
  api.getDocTypes(author).then((result) => {
    console.log('doctypes', result);
    if (result.data.success) {
      dispatch({ type: DOC_TYPES, payload: result.data.type });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[get doctypes error]', err);
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


export const getAllUsers = () => (dispatch) => {
  api.getAllUsers().then((result) => {
    console.log('users', result);
    if (result.data.success) {
      dispatch({ type: SET_USERS, payload: result.data.users });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[get users error]', err);
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const addUser = (userData) => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.signUp({ ...userData, password: '123456' }).then((result) => {
    console.log('signUp', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: ADD_USER, payload: result.data.user });
    } else {
      console.log('error sign up');
      // dispatch(actions.setLoading(false));
      dispatch(actionNotification.showNotification(result.data.message));
      // dispatch(actions.showError({errorTitle: 'Error', errorMessage: result.data.errorString}));
    }
  }).catch(err => {
    console.log('[sign up error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const updateUser = (user) => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.updateUser(user).then((result) => {
    console.log('updated user', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: UPDATE_USER, payload: result.data.type });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[update user error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};
