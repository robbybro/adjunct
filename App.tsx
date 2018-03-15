import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import configureStore from './store';
import AppWithNavigationState from './components/AppNavigator';
export default class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

/*
EVENTUAL TODO:
* tsify this plz
* instead of selecting one thing at a time (mash, boil, ferment), select which
  you'd like to do in a flow
*/
