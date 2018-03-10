import { ACTIONS } from '../Const';

const initialState = { timerType: '', timerLength: 60 };

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
        default:
            return state;
    }
}
