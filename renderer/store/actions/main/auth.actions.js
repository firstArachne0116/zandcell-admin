import * as api from '../../../api';
import * as actionNotification from './notification.actions';
import * as actionApi from './api.actions';

export const SIGN_UP = '[AUTH] SIGN UP';
export const SIGN_IN = '[AUTH] SIGN IN';
export const SIGN_IN_WITH_TOKEN = '[AUTH] SIGN IN WITH TOKEN';
export const SIGN_OUT = '[AUTH] SIGN OUT';

export const UPDATE_TOKEN = '[AUTH] UPDATE TOKEN';

export const SET_ACCOUNT_AVATAR = '[AUTH] SET ACCOUNT AVATAR';
export const SET_ACCOUNT_BALANCE = '[AUTH] SET ACCOUNT BALANCE';

export const signIn = (options) => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.signIn(options).then((result) => {
    console.log(result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: SIGN_IN, payload: result.data });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[sign in error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const signUp = (userData) => (dispatch) => {
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.signUp(userData).then((result) => {
    console.log('signUp', result);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      console.log('[sign up ] Attempt to sign in');
      dispatch(signIn(userData));
    } else {
      console.log('error sign up');
      // dispatch(actions.setLoading(false));
      // dispatch(actions.showError({errorTitle: 'Error', errorMessage: result.data.errorString}));
    }
  }).catch(err => {
    console.log('[sign up error]', err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const signInWithToken = (token) => (dispatch) => {
  console.log('[sign with token]', token);
  dispatch({ type: actionApi.SET_API_BUSY, isBusy: true });
  api.signInWithToken(token).then((result) => {
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    if (result.data.success) {
      dispatch({ type: SIGN_IN_WITH_TOKEN, payload: result.data });
    } else {
      console.log('[sign out] token expired or failed');
      dispatch({ type: SIGN_OUT });
    }
  }).catch(err => {
    console.log(err);
    dispatch({ type: actionApi.SET_API_BUSY, isBusy: false });
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const signOut = () => (dispatch) => {
  console.log('[sign out]');
  dispatch({ type: SIGN_OUT });
};
/*
export const signInWithToken = (token) => {
    return (dispatch) => {
        Reactotron.log("[sign with token]", token);
        api.signInWithToken(token).then((result) => {
            dispatch(actions.setLoading(false));
            if (result.data.success) {
                dispatch({type: SIGN_IN_WITH_TOKEN, payload: result.data});
            }
            else {
                Reactotron.log("[sign out] token expired or failed");
                dispatch({type: SIGN_OUT});
            }
        }).catch(err => {
            Reactotron.log(err);
            dispatch(actions.showError({errorTitle: 'Error', errorMessage: err.message}));
        })
    }
}

 */
