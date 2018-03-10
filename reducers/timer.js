import { ACTIONS } from '../Const';

export default function timer(
    state = { timerType: '', timerLength: 60 },
    action,
) {
    switch (action.type) {
        case ACTIONS.SET_TIMER_TYPE:
            return {
                ...state,
                timerType: action.value,
            };
        case ACTIONS.SET_TIMER_LENGTH:
            return {
                ...state,
                timerLength: action.value,
            };
        default:
            return state;
    }
}
