import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { startTimer, stopTimer, tick } from '../../actions/timer';

import EventList from '../../components/EventList';

class Timer extends Component {
    render() {
        const { events, timer, startTimer, stopTimer } = this.props;
        return (
            <View>
                <Text>Timer</Text>
                <EventList events={events.added} />
                <Text>Elapsed Time: {timer.elapsedTime}</Text>
                {!timer.isTicking ? (
                    <Button title="Start" onPress={() => startTimer()} />
                ) : (
                    <Button title="Stop" onPress={() => stopTimer()} />
                )}
            </View>
        );
    }
}

let timer = () => null;
const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = dispatch => {
    return {
        startTimer: () => {
            timer = setInterval(() => dispatch(tick()), 1000);
            dispatch(startTimer());
        },
        stopTimer: () => {
            clearInterval(timer);
            dispatch(stopTimer());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
