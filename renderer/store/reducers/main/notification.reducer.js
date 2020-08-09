import * as Actions from '../../actions/main/index';

const initialState = {
  showNotification: false,
  successModal: false,
  notificationContent: '',
  isLoading: false,
};

const notificationReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_NOTIFICATION:
    {
      console.log('[Reducer] SHOW_NOTIFICATION', action.notificationContent);
      return { ...state, notificationContent: action.notificationContent, showNotification: true };
    }
    case Actions.HIDE_NOTIFICATION:
    {
      console.log('[Reducer] HIDE_NOTIFICATION');
      return { ...state, notificationContent: '', showNotification: false };
    }
    case Actions.SET_LOADING:
    {
      console.log('[Reducer] SET_LOADING');
      return { ...state, isLoading: action.isLoading };
    }
    default:
    {
      return state;
    }
  }
};

export default notificationReducer;
