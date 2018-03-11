import React, { Component } from 'react';
import { Button, Text, Vibration, View } from 'react-native';
import { connect } from 'react-redux';

import { startTimer, stopTimer, resetTimer, tick } from '../../actions/timer';
import { fireEvent } from '../../actions/events';
import EventList from '../../components/EventList';
import { ONE_SECOND, VIBRATION_PATTERN } from '../../Const';

class Timer extends Component {
    render() {
        const {
            events,
            timer,
            resetTimer,
            startTimer,
            stopTimer,
            fireEvent,
        } = this.props;
        // fire events as they arise
        events.added.filter(e => !e.fired).forEach(e => {
            if (e.time >= timer.timerLength - timer.elapsedTime) {
                Vibration.vibrate(VIBRATION_PATTERN);
                fireEvent(e);
            }
        });
        // timer finished
        if (timer.elapsedTime === timer.total) {
            stopTimer();
            Vibration.vibrate(VIBRATION_PATTERN);
        }
        return (
            <View>
                <Text>Timer</Text>
                <EventList events={events.added} />
                <Text>Elapsed Time: {timer.elapsedTime}</Text>
                {!timer.isTicking ? (
                    [
                        <Button title="Start" onPress={() => startTimer()} />,
                        <Button title="Reset" onPress={() => resetTimer()} />,
                    ]
                ) : (
                    <Button title="Stop" onPress={() => stopTimer()} />
                )}
            </View>
        );
    }
}

let timer = () => null;
const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = (dispatch, props) => {
    return {
        ...props,
        startTimer: () => {
            timer = setInterval(() => {
                dispatch(tick());
            }, ONE_SECOND);
            dispatch(startTimer());
        },
        stopTimer: () => {
            clearInterval(timer);
            dispatch(stopTimer());
        },
        fireEvent: e => {
            dispatch(fireEvent(e));
        },
        resetTimer: () => dispatch(resetTimer()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
