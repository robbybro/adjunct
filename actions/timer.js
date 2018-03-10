import { ACTIONS } from '../Const';

export const setTimerType = timerType => (
    {
        type: ACTIONS.SET_TIMER_TYPE,
        value: timerType
    }
);

export const setTimerLength = setTimerLength => (
    {
        type: ACTIONS.SET_TIMER_LENGTH,
        value: setTimerLength
    }
)