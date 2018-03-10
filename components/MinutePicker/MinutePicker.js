import React from 'react';
import { Picker, Item } from 'react-native';

const MinutePicker = ({ numberOfMinutes, defaultMinutes, onValueChange }) => (
    <Picker
        selectedValue={defaultMinutes}
        onValueChange={itemValue => onValueChange(itemValue)}
        mode="dropdown"
    >
        {new Array(numberOfMinutes + 1)
            .fill('')
            .map((fill, i) => <Item label={i.toString()} value={i} key={i} />)}
    </Picker>
);

export default MinutePicker;
