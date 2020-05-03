import { createStore, compose } from 'redux';

//activa redux developer tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = state => state;

export const store = createStore(reducer, {}, composeEnhancers());