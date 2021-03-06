import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const defaultInput = (props) => {
    return(
        <TextInput
            underlineColorAndroid='transparent'
            {...props}
            style={[styles.input, props.style]}
        />
    )
}


const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor : '#eee',
        borderRadius: 10,
        padding: 5,
        marginTop: 8,
        marginBottom: 8,
    }
});

export default defaultInput;