import { ACTIONS } from '../Const';

export const updateCurrentlyEditingEvent = ({ key, value }) => {
    console.log(key, value);
    return {
        type: ACTIONS.EVENTS.UPDATE_CURRENTLY_EDITING_EVENT,
        value: {
            key,
            value,
        },
    };
};

export const addEvent = event => ({
    type: ACTIONS.EVENTS.ADD_EVENT,
    value: event,
});

export const removeEvent = event => ({
    type: ACTIONS.EVENTS.REMOVE_EVENT,
    value: event,
});

export const fireEvent = event => ({
    type: ACTIONS.EVENTS.FIRE_EVENT,
    value: event,
});
