import _ from 'lodash';

import { ACTIONS, INITIAL_SUGGESTED_EVENTS } from '../Const';

/*
Event: {
    ingredient: string;
    qty: string;
    time: number;
    fired: false;
}
 */

const initialState = { current: {}, suggested: [], added: [] };

export default function events(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.EVENTS.UPDATE_CURRENTLY_EDITING_EVENT:
            return {
                ...state,
                current: {
                    ...state.current,
                    [action.value.key]: action.value.value,
                },
            };
        case ACTIONS.EVENTS.ADD_EVENT:
            return {
                ...state,
                added: [...state.added, { ...action.value, fired: false }],
                current: {},
            };
        case ACTIONS.EVENTS.ADD_SUGGESTED_EVENT:
            return {
                ...state,
                suggested: _.without(state.suggested, action.value),
                added: [...state.added, action.value],
            };
        case ACTIONS.EVENTS.SET_SUGGESTED_EVENTS:
            return {
                ...state,
                suggested: _.without(action.value, ...state.added),
            };

        case ACTIONS.EVENTS.REMOVE_EVENT:
            const added = _.without(state.added, action.value);
            return {
                ...state,
                added,
                // add events back to suggested as they're removed from added
                suggested: [...state.suggested, action.value],
            };
        // TODO:
        case ACTIONS.EVENTS.FIRE_EVENT:
            return {
                ...state,
                added: [
                    ..._.without(state.added, action.value),
                    { ...action.value, fired: true },
                ],
            };
        default:
            return state;
    }
}
