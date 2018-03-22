import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import 'semantic-ui-css/semantic.min.css';
import Raven from 'raven-js';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  // const { logger } = require('redux-logger');
  middlewares.push(logger);
}
Raven.config('https://90e60923d99a4b42b39195233e6e10b9@sentry.io/445353').install();


// Add the reducer to your store on the `routing` key
const store = createStore(
  reducers,
  applyMiddleware(thunk),
  compose(applyMiddleware(...middlewares)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();



// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import { createStore, applyMiddleware } from 'redux'
// import { selectSubreddit, fetchPosts } from './actions'
// import rootReducer from './reducers'
//
// const loggerMiddleware = createLogger()
//
// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   )
// )
//
// store.dispatch(selectSubreddit('reactjs'))
// store
//   .dispatch(fetchPosts('reactjs'))
//   .then(() => console.log(store.getState()))
