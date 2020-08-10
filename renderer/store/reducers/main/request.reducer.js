import * as Actions from '../../actions/main/index';

const initialState = {
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_REQUEST:
    {
      console.log('[Reducer] SET_CURRENT_REQUEST', action.payload);
      return { ...state, currentRequest: action.payload };
    }
    case Actions.SET_RUQUEST_CONTENT:
    {
      console.log('[Reducer] SET_RUQUEST_CONTENT', action.payload);
      return {
        ...state, documents: action.payload.documents, files: action.payload.files, comments: action.payload.comments
      };
    }
    case Actions.ADD_COMMENT:
    {
      console.log('[Reducer] ADD_COMMENT', action.payload);
      return {
        ...state, comments: [...state.comments, action.payload]
      };
    }
    case Actions.ACCEPT_DOC:
    {
      console.log('[Reducer] ACCEPT_DOC', action.payload);
      return {
        ...state, documents: state.documents.map((doc) => (doc._id === action.payload ? { ...doc, status: 'Accepted' } : doc))
      };
    }
    case Actions.REJECT_DOC:
    {
      console.log('[Reducer] REJECT_DOC', action.payload);
      return {
        ...state, documents: state.documents.map((doc) => (doc._id === action.payload.documetId ? { ...doc, status: 'Rejected' } : doc)), comments: [...state.comments, action.payload.rejectComment]
      };
    }
    default:
    {
      return state;
    }
  }
};

export default requestReducer;
