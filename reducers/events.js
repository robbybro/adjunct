import _ from 'lodash';

import { ACTIONS } from '../Const';

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
                added: [...state.added, action.value],
                current: {},
            };
        case ACTIONS.EVENTS.ADD_SUGGESTED_EVENT:
            return {
                ...state,
                suggested: _.without(state.suggested, action.value),
                added: [...state.added, action.value],
            };
        case ACTIONS.EVENTS.REMOVE_EVENT:
            return {
                ...state,
                added: _.without(state.added, action.value),
            };
        // TODO:
        case ACTIONS.EVENTS.FIRE_EVENT:
            return {
                ...state,
            };
        default:
            return state;
    }
}
