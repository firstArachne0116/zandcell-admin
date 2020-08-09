import * as Actions from '../../actions/main/index';

const initialState = {
  docTypes: [],
};

const requestReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.DOC_TYPES:
    {
      console.log('[Reducer] DOC_TYPES', action.payload);
      return { ...state, docTypes: action.payload };
    }
    default:
    {
      return state;
    }
  }
};

export default requestReducer;
