import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './../Reducers';

//activa redux developer tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)));
//export const store = createStore(reducers, {}, composeEnhancers());