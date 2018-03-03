import React from 'react';
import { StyleSheet, Button, TextInput, View, Alert } from 'react-native';
import Timer from './components/Timer/Timer';

export default class HelloWorldApp extends React.Component {
    constructor() {
        super();
        this.state = { text: '' };
    }
    btnClick(e) {
        Alert.alert('Alert title', this.state.text);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ width: 100 }}
                    val={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
                <Button title="Click" onPress={e => this.btnClick(e)} />
                <Timer />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
