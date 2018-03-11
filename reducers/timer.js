import { ACTIONS } from '../Const';

const initialState = {
    timerType: '',
    timerLength: 60,
    elapsedTime: 0,
    isTicking: false,
};

export default function timer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.TIMER.SET_TIMER_TYPE:
            return {
                ...state,
                timerType: action.value,
            };
        case ACTIONS.TIMER.SET_TIMER_LENGTH:
            return {
                ...state,
                timerLength: action.value,
            };
        case ACTIONS.TIMER.TICK:
            return {
                ...state,
                elapsedTime: state.elapsedTime + 1,
            };
        case ACTIONS.TIMER.START_TIMER:
            return {
                ...state,
                isTicking: true,
            };
        case ACTIONS.TIMER.STOP_TIMER:
            return {
                ...state,
                isTicking: false,
            };
        default:
            return state;
    }
}
