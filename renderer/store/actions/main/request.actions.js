import * as actionNotification from './notification.actions';
import * as api from '../../../api';

export const SET_CURRENT_REQUEST = '[REQ] SET_CURRENT_REQUEST';
export const SET_RUQUEST_CONTENT = '[REQ] SET_RUQUEST_CONTENT';
export const ADD_COMMENT = '[REQ] ADD_COMMENT';
export const ACCEPT_DOC = '[REQ] ACCEPT_DOC';
export const REJECT_DOC = '[REQ] REJECT_DOC';

export const setCurrentRequest = (req) => ({
  type: SET_CURRENT_REQUEST,
  payload: req
});

export const getRequestContentById = (request) => (dispatch) => {
  api.getRequestContentById(request._id).then((result) => {
    console.log('request content', result);
    if (result.data.success) {
      dispatch({ type: SET_RUQUEST_CONTENT, payload: result.data.content });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[get request content error]', err);
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const acceptDoc = (doc) => (dispatch) => {
  try {
    api.acceptDoc(doc._id).then((result) => {
      console.log('accept doc', result);
      if (result.data.success) {
        dispatch({ type: ACCEPT_DOC, payload: doc._id });
      } else {
        dispatch(actionNotification.showNotification(result.data.message));
      }
    }).catch(err => {
      console.log('[accept doc error]', err);
      dispatch(actionNotification.showNotification('Something went wrong.'));
    });
  } catch (err) {
    console.log('[accept doc error]', err);
    dispatch(actionNotification.showNotification('Something went wrong.'));
  }
};

export const rejectDoc = (documentId, userName, message) => (dispatch) => {
  api.rejectDoc({
    documentId,
    userName,
    message,
  }).then((result) => {
    console.log('reject doc', result);
    if (result.data.success) {
      dispatch({ type: REJECT_DOC, payload: { documentId, rejectComment: result.data.rejectComment } });
    } else {
      dispatch(actionNotification.showNotification(result.data.message));
    }
  }).catch(err => {
    console.log('[reject doc error]', err);
    dispatch(actionNotification.showNotification('Something went wrong.'));
  });
};

export const addComment = (comment) => (dispatch) => {
  try {
    api.addComment(comment).then((result) => {
      console.log('new comment', result);
      if (result.data.success) {
        dispatch({ type: ADD_COMMENT, payload: result.data.comment });
      } else {
        dispatch(actionNotification.showNotification(result.data.message));
      }
    }).catch(err => {
      console.log('[add comment error]', err);
      dispatch(actionNotification.showNotification('Something went wrong.'));
    });
  } catch (err) {
    console.log('[add comment error]', err);
    dispatch(actionNotification.showNotification('Something went wrong.'));
  }
};
