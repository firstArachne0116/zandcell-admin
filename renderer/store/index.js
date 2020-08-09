import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createReducer from './reducers/index';

const initStore = (initialState) => {
  let store;

  const isClient = typeof window !== 'undefined';

  if (isClient) {
    const persistConfig = {
      key: 'root',
      storage
    };

    store = createStore(
      persistReducer(persistConfig, createReducer()),
      initialState,
      applyMiddleware(thunkMiddleware)
    );
    // console.log(createReducer()());

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      createReducer(),
      initialState,
      applyMiddleware(thunkMiddleware)
    );
  }

  return store;
};

export default initStore();
