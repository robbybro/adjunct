import { combineReducers } from 'redux';
import timer from './timer';
import events from './events';

const rootReducer = combineReducers({
    timer,
    events,
});

export default rootReducer;
