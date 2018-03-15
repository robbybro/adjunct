import React from 'react';
import { Button, Text, View, Picker, Item } from 'react-native';
import { connect } from 'react-redux';

import { ROUTES } from '../../Const';
import MinutePicker from '../../components/MinutePicker';
import { setTimerLength } from '../../actions/timer';

const SetDefaults = ({ navigation, timer, onSetTimerLength }) => {
    return (
        <View>
            <Text>Defaults for {timer.timerType}</Text>
            <MinutePicker
                numberOfMinutes={120}
                defaultMinutes={timer.timerLength}
                onValueChange={value => onSetTimerLength(value)}
            />
            <Text>Minutes</Text>
            <Button
                onPress={() => navigation.navigate(ROUTES.ADD_EVENTS)}
                title="Next"
            />
        </View>
    );
};

const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = dispatch => ({
    onSetTimerLength: time => dispatch(setTimerLength(time)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SetDefaults);
