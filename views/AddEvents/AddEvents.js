import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import MinutePicker from '../../components/MinutePicker';
import EventList from '../../components/EventList';

import {
    updateCurrentlyEditingEvent,
    addEvent,
    removeEvent,
    addSuggestedEvent,
} from '../../actions/events';
import { ROUTES } from '../../Const';

class AddEvents extends React.Component {
    render() {
        const {
            events,
            onTextChange,
            onMinutePick,
            addEvent,
            addSuggestedEvent,
            navigation,
            removeEvent,
        } = this.props;

        return (
            <View>
                <Text>Add Events</Text>
                <EventList events={events.added} />
                <View>
                    <Text>Ingredient</Text>
                    <TextInput
                        defaultValue={events.current.ingredient}
                        onChangeText={value =>
                            onTextChange('ingredient', value)
                        }
                    />
                    <Text>Qty</Text>
                    <TextInput
                        defaultValue={events.current.qty}
                        onChangeText={value => onTextChange('qty', value)}
                    />
                    <Text>Time</Text>
                    <MinutePicker
                        numberOfMinutes={120}
                        defaultMinutes={events.current.time}
                        onValueChange={value => onMinutePick(value)}
                        removeEvent={removeEvent}
                    />
                    <Button
                        title="Add"
                        onPress={() => addEvent(events.current)}
                    />
                </View>
                <View>
                    {events.suggested
                        .sort((a, b) => b.time - a.time)
                        .map((e, i) => (
                            <View>
                                <Text key={i}>{e.ingredient}</Text>
                                <Button
                                    onPress={() => addSuggestedEvent(e)}
                                    title="+"
                                />
                            </View>
                        ))}
                </View>
                <Button
                    onPress={() => navigation.navigate(ROUTES.TIMER)}
                    title="Next"
                />
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
            dispatch(updateCurrentlyEditingEvent({ key, value })),
        addEvent: event => dispatch(addEvent(event)),
        addSuggestedEvent: event => dispatch(addSuggestedEvent(event)),
        removeEvent: event => dispatch(removeEvent(event)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEvents);
