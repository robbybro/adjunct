import { ACTIONS } from '../Const';

export const setTimerType = timerType => ({
    type: ACTIONS.TIMER.SET_TIMER_TYPE,
    value: timerType,
});

export const setTimerLength = value => {
    return {
        type: ACTIONS.TIMER.SET_TIMER_LENGTH,
        value: value,
    };
};

export const startTimer = () => ({
    type: ACTIONS.TIMER.START_TIMER,
});

export const stopTimer = () => ({
    type: ACTIONS.TIMER.STOP_TIMER,
});

export const resetTimer = () => ({
    type: ACTIONS.TIMER.RESET_TIMER,
});

export const tick = () => ({
    type: ACTIONS.TIMER.TICK,
});
