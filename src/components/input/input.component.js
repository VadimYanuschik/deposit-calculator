import React from 'react';
import {InputStyles} from './input.styles';

function Input({placeholder, ...otherProps}) {
    return (
        <InputStyles {...otherProps} pattern="[0-9]*" type="text" placeholder={placeholder}/>
    );
}

export default Input;