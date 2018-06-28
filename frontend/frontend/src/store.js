import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './components/localStorage'

const initialState = {};

const middleware = [thunk];

const startState = {
  ...initialState,
  auth_token: loadState('auth_token')
}

const store = createStore(
  rootReducer,
  startState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//need to store the auth token in local storage and be able to access it
store.subscribe(() => {
  saveState(store.getState().auth_token);
  //localStorage.setItem('TOKEN', store.getState().token);
});

export default store;
