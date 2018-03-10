import React from 'react';
import { Button, Text, View, Picker, Item } from 'react-native';
import { connect } from 'react-redux';

import { ROUTES } from '../../Const';
import MinutePicker from '../../components/MinutePicker/MinutePicker';
import { setTimerLength } from '../../actions/timer';

// TODO: this doesn't work for some reason. no clue why
// const TimePickerItems = () =>
//     new Array(120)
//         .fill('')
//         .map((fill, i) => (
//             <Item label={(i + 1).toString()} value={i + 1} key={i + 1} />
//         ));

const SetDefaults = ({ navigation, timer, onSetTimerLength }) => {
    return (
        <View>
            <Text>Defaults for {timer.timerType}</Text>
            <MinutePicker
                numberOfMinutes={120}
                defaultMinutes={60}
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

// SetDefaults.navigationOptions = ({ navigation }) => ({
//     title: navigation.state.params.activity,
//     headerStyle: {
//         backgroundColor: '#f4511e',
//     },
// });
const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = dispatch => ({
    onSetTimerLength: time => dispatch(setTimerLength(time)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SetDefaults);
