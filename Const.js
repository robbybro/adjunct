export const ONE_SECOND = 1000;

export const ROUTES = {
    TITLE: 'TITLE',
    SET_DEFAULTS: 'SET_DEFAULTS',
    ADD_EVENTS: 'ADD_EVENTS',
    TIMER: 'TIMER',
};

export const ACTIVITIES = {
    MASH: 'MASH',
    BOIL: 'BOIL',
    FERMENT: 'FERMENT',
};

export const ACTIONS = {
    TIMER: {
        SET_TIMER_TYPE: 'SET_TIMER_TYPE',
        SET_TIMER_LENGTH: 'SET_TIMER_LENGTH',
        SET_ELAPSED_TIME: 'SET_ELAPSED_TIME',
        START_TIMER: 'START_TIMER',
        STOP_TIMER: 'STOP_TIMER',
    },
    EVENTS: {
        UPDATE_CURRENTLY_EDITING_EVENT: 'UPDATE_CURRENTLY_EDITING_EVENT',
        ADD_EVENT: 'ADD_EVENT',
        ADD_SUGGESTED_EVENT: 'ADD_SUGGESTED_EVENT',
        REMOVE_EVENT: 'REMOVE_EVENT',
        FIRE_EVENT: 'FIRE_EVENT',
    },
};
