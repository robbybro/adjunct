import { ACTIONS, INITIAL_SUGGESTED_EVENTS } from '../Const';

export const updateCurrentlyEditingEvent = fieldToUpdate => {
    return {
        type: ACTIONS.EVENTS.UPDATE_CURRENTLY_EDITING_EVENT,
        value: fieldToUpdate,
    };
};

export const addEvent = event => ({
    type: ACTIONS.EVENTS.ADD_EVENT,
    value: event,
});

export const addSuggestedEvent = event => ({
    type: ACTIONS.EVENTS.ADD_SUGGESTED_EVENT,
    value: event,
});

export const setSuggestedEvents = timerType => ({
    type: ACTIONS.EVENTS.SET_SUGGESTED_EVENTS,
    value: INITIAL_SUGGESTED_EVENTS[timerType],
});
export const removeEvent = event => {
    return {
        type: ACTIONS.EVENTS.REMOVE_EVENT,
        value: event,
    };
};

export const fireEvent = event => {
    return {
        type: ACTIONS.EVENTS.FIRE_EVENT,
        value: event,
    };
};
