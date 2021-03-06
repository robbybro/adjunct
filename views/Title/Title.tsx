import React from 'react';
import { Button, Text, View } from 'react-native';

import { ROUTES, ACTIVITIES } from '../../Const';
import { connect } from 'react-redux';
import { setTimerType } from '../../actions/timer';
import { setSuggestedEvents } from '../../actions/events';

const Buttons = ({ navigation, onTimerTypeClick }): JSX.Element[] =>
    Object.keys(ACTIVITIES).map(activity => (
        <Button
            key={activity}
            onPress={() => {
                onTimerTypeClick(ACTIVITIES[activity]);
                navigation.navigate(ROUTES.SET_DEFAULTS);
            }}
            title={ACTIVITIES[activity]}
        />
    ));

const Title = ({ navigation, onTimerTypeClick, ...otherProps }) => {
    return (
        <View>
            <Text>Adjunct</Text>
            <Buttons
                navigation={navigation}
                onTimerTypeClick={onTimerTypeClick}
            />
        </View>
    );
};

const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = dispatch => {
    return {
        onTimerTypeClick: timerType => {
            dispatch(setTimerType(timerType));
            dispatch(setSuggestedEvents(timerType));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
