import reducerFn from './redux/reducer.js';
import promiseMiddleware from 'redux-promise-middleware';
import {createStore,applyMiddleware} from 'redux';

export default createStore(reducerFn,applyMiddleware(promiseMiddleware()));