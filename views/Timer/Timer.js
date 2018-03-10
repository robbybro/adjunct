import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Timer extends Component {
    render() {
        return (
            <View>
                <Text>Timer</Text>
            </View>
        );
    }
}

const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
