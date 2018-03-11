import React from 'react';
import { Button, Text, View } from 'react-native';

export default class EventList extends React.Component {
    render() {
        const { events, removeEvent } = this.props;
        return (
            <View>
                {events.sort((a, b) => b.time - a.time).map((e, i) => (
                    <View>
                        <Text
                            key={i}
                            style={{ color: e.fired ? 'red' : 'black' }}
                        >
                            {e.ingredient}, {e.qty}, {e.time}
                        </Text>
                        <Button onPress={() => removeEvent(e)} title="x" />
                    </View>
                ))}
            </View>
        );
    }
}
