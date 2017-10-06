import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
  console.ignoredYellowBox = ['Remote debugger'];
}

export default createStore(reducers, applyMiddleware(...middleware));
