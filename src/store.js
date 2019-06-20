import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export const history = createBrowserHistory()

const composeEnhancer = typeof window === 'object' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

export default createStore(
  rootReducer(history),  
  composeEnhancer(applyMiddleware(routerMiddleware(history),thunk))
  );