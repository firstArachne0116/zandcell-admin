/* eslint-disable func-names */
import * as Actions from '../../actions/main/index';

const initialState = {
  state: '',
  access_token: '',
  decodedToken: { },
  avatar: ''
};

const authReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SIGN_IN:
    {
      console.log('[Reducer] SIGN_IN', action.payload);
      return { ...action.payload, state: 'signed-in' };
    }
    case Actions.SIGN_IN_WITH_TOKEN:
    {
      console.log('[Reducer] SIGN_IN_WITH_TOKEN', action.payload);
      return { ...action.payload, state: 'signed-in-token' };
    }
    case Actions.SIGN_OUT:
    {
      return { ...initialState, state: '' };
    }
    case Actions.UPDATE_TOKEN:
    {
      console.log('[Reducer] UPDATE_TOKEN', action.payload);
      return { ...state, ...action.payload };
    }
    case Actions.SET_ACCOUNT_AVATAR:
    {
      console.log('[Reducer] SET_ACCOUNT_AVATAR', state);
      return { ...state, avatar: action.payload };
    }
    default:
    {
      return state;
    }
  }
};

export default authReducer;
