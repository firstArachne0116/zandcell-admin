import * as Actions from '../../actions/main/index';

const initialState = {
  docTypes: [],
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.DOC_TYPES:
    {
      console.log('[Reducer] DOC_TYPES', action.payload);
      return { ...state, docTypes: action.payload };
    }
    case Actions.ADD_DOC_TYPE:
    {
      console.log('[Reducer] ADD_DOC_TYPE', action.payload);
      return { ...state, docTypes: [...state.docTypes, action.payload] };
    }
    case Actions.UPDATE_DOC_TYPE:
    {
      console.log('[Reducer] UPDATE_DOC_TYPE', action.payload);
      return { ...state, docTypes: state.docTypes.map((dt) => (dt._id === action.payload._id ? action.payload : dt)) };
    }
    case Actions.DELETE_DOC_TYPE:
    {
      console.log('[Reducer] DELETE_DOC_TYPE', action.payload);
      return { ...state, docTypes: state.docTypes.filter((dt) => (dt._id !== action.payload)) };
    }
    default:
    {
      return state;
    }
  }
};

export default requestReducer;
