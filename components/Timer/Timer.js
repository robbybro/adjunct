import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    spinny: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'skyblue',
    },
});

export default () => {
    return <View style={styles.spinny} />;
};
