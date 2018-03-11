export const ONE_SECOND = 1000;
export const VIBRATION_PATTERN = [100, 100, 100];

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
        RESET_TIMER: 'RESET_TIMER',
        START_TIMER: 'START_TIMER',
        STOP_TIMER: 'STOP_TIMER',
        TICK: 'TICK',
    },
    EVENTS: {
        UPDATE_CURRENTLY_EDITING_EVENT: 'UPDATE_CURRENTLY_EDITING_EVENT',
        ADD_EVENT: 'ADD_EVENT',
        ADD_SUGGESTED_EVENT: 'ADD_SUGGESTED_EVENT',
        SET_SUGGESTED_EVENTS: 'SET_SUGGESTED_EVENTS',
        REMOVE_EVENT: 'REMOVE_EVENT',
        FIRE_EVENT: 'FIRE_EVENT',
    },
};

export const INITIAL_SUGGESTED_EVENTS = {
    [ACTIVITIES.BOIL]: [
        {
            ingredient: 'Yeast Nutrient',
            qty: '1/2 tsp / 5gal',
            time: 10,
            fired: false,
        },
        {
            ingredient: 'Whirlfloc',
            qty: '1/2 tablet / 5gal',
            time: 15,
            fired: false,
        },
        {
            ingredient: 'Irish Moss',
            qty: '1 tsp / 5gal',
            time: 15,
            fired: false,
        },
    ],
    [ACTIVITIES.FERMENT]: [
        {
            ingredient: 'Test 1',
            qty: '1 seconds',
            time: 59,
            fired: false,
        },
        {
            ingredient: 'Test 2',
            qty: '2 seconds',
            time: 58,
            fired: false,
        },
        {
            ingredient: 'Test 3',
            qty: '5 seconds',
            time: 55,
            fired: false,
        },
    ],
    [ACTIVITIES.MASH]: [],
};
