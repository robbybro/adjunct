import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import Timer from './components/Timer/Timer';
import { StackNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import { ROUTES } from './Const';
import store from './store';

import SetDefaults from './views/SetDefaults/SetDefaults';
import Title from './views/Title/Title';

const AppNavigator = StackNavigator(
    {
        [ROUTES.TITLE]: {
            screen: Title,
        },
        [ROUTES.SET_DEFAULTS]: {
            screen: SetDefaults,
        },
        // [ROUTES.ADD_EVENTS]: {
        //     screen: AddEvents,
        // },
        // [ROUTES.TIMER]: {
        //     screen: Timer,
        // },

    },
    {
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
