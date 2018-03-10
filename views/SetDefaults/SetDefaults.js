import React from 'react';
import { Button, Text, View, Picker, Item } from 'react-native';
import { connect } from 'react-redux';

import { ROUTES } from '../../Const';

// TODO: this doesn't work for some reason. no clue why
// const TimePickerItems = () =>
//     new Array(120)
//         .fill('')
//         .map((fill, i) => (
//             <Item label={(i + 1).toString()} value={i + 1} key={i + 1} />
//         ));

const SetDefaults = ({ timer, onTimerLengthUpdate }) => {
    return (
        <View>
            <Text>Defaults for {timer.timerType}</Text>
            <Picker
                selectedValue={60}
                onValueChange={itemValue => onTimerLengthUpdate(itemValue)}
                mode='dropdown'
                prompt={`Minutes to ${timer.timerType}`}
            >
                {new Array(120)
                    .fill('')
                    .map((fill, i) => (
                        <Item
                            label={(i + 1).toString()}
                            value={i + 1}
                            key={i + 1}
                        />
                    ))}
            </Picker>
            <Text>Minutes</Text>
            <Button
                onPress={() => navigation.navigate(ROUTES.TITLE)}
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
    onTimerLengthUpdate: timerLength => dispatch(setTimerLength),
});
export default connect(mapStateToProps, mapDispatchToProps)(SetDefaults);
