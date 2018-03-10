import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
// import Timer from './components/Timer/Timer';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { ROUTES } from './Const';
import store from './store';

import SetDefaults from './views/SetDefaults/SetDefaults';
import Title from './views/Title/Title';
import AddEvents from './views/AddEvents/AddEvents';
import Timer from './views/Timer/Timer';

const AppNavigator = StackNavigator(
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
        initialRouteName: ROUTES.TITLE,
    },
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

/*
EVENTUAL TODO:
* do I want to move navigation into redux store?
* tsify this plz
* instead of selecting one thing at a time (mash, boil, ferment), select which
  you'd like to do in a flow
*/
