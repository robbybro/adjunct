import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, {});

export default store;
