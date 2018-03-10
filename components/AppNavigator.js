// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import SetDefaults from '../views/SetDefaults/SetDefaults';
import Title from '../views/Title/Title';
import AddEvents from '../views/AddEvents/AddEvents';
import Timer from '../views/Timer/Timer';

import { ROUTES } from '../Const';

export const AppNavigator = StackNavigator(
    {
        [ROUTES.TITLE]: {
            screen: Title,
        },
        [ROUTES.SET_DEFAULTS]: {
            screen: SetDefaults,
        },
        [ROUTES.ADD_EVENTS]: {
            screen: AddEvents,
        },
        [ROUTES.TIMER]: {
            screen: Timer,
        },
    },
    {
        // XXX: set this to screen you're working on for testing reasons
        initialRouteName: ROUTES.ADD_EVENTS,
    },
);

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);
const addListener = createReduxBoundAddListener('root');

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
    />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
