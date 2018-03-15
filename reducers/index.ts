import { combineReducers } from 'redux';
import events from './events';
import nav from './nav';
import timer from './timer';

const rootReducer = combineReducers({
    events,
    nav,
    timer,
});

export default rootReducer;
