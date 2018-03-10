import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import MinutePicker from '../../components/MinutePicker/MinutePicker';
import {
    updateCurrentlyEditingEvent,
    addEvent,
    removeEvent,
} from '../../actions/events';

class AddEvents extends React.Component {
    render() {
        const { events, onTextChange, onMinutePick, addEvent } = this.props;
        return (
            <View>
                <Text>Add Events</Text>
                <View>
                    <Text>Ingredient</Text>
                    <TextInput
                        onChangeText={value =>
                            onTextChange('ingredient', value)
                        }
                    />
                    <Text>Qty</Text>
                    <TextInput
                        onChangeText={value => onTextChange('qty', value)}
                    />
                    <Text>Time</Text>
                    <MinutePicker
                        numberOfMinutes={120}
                        defaultMinutes={1}
                        onValueChange={value => onMinutePick(value)}
                    />
                    <Button
                        title="Add"
                        onPress={() => addEvent(events.current)}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = dispatch => {
    return {
        onMinutePick: value =>
            dispatch(updateCurrentlyEditingEvent({ key: 'time', value })),
        onTextChange: (key, value) =>
            dispatch(updateCurrentlyEditingEvent(key, value)),
        addEvent: event => dispatch(addEvent(event)),
        removeEvent: event => dispatch(removeEvent(event)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEvents);
