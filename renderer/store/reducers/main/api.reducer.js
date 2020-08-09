import * as Actions from '../../actions/main/index';

const initialState = {
  isBusy: true
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_API_BUSY:
    {
      console.log('[Reducer] SET_API_BUSY', action.isBusy);
      return { ...state, isBusy: action.isBusy };
    }
    default:
    {
      return state;
    }
  }
};

export default apiReducer;
