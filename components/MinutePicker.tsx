import React from 'react';
import { Picker } from 'react-native';

export default class MinutePicker extends React.Component {
    render() {
        const { numberOfMinutes, defaultMinutes, onValueChange } = this.props;
        return (
            <Picker
                selectedValue={defaultMinutes}
                onValueChange={itemValue => onValueChange(itemValue)}
                // mode="dropdown"
            >
                {new Array(numberOfMinutes + 1)
                    .fill('')
                    .map((fill, i) => (
                        <Picker.Item label={i.toString()} value={i} key={i} />
                    ))}
            </Picker>
        );
    }
}

// TODO: this doesn't work for some reason. no clue why
// const TimePickerItems = () =>
//     new Array(120)
//         .fill('')
//         .map((fill, i) => (
//             <Item label={(i + 1).toString()} value={i + 1} key={i + 1} />
//         ));
