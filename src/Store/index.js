import { createStore, compose } from 'redux';
import reducer from './../Reducers';

//activa redux developer tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, {}, composeEnhancers());