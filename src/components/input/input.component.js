import React from 'react';
import {InputStyles} from './input.styles';

function Input({placeholder}) {
    return (
        <InputStyles type="text" placeholder={placeholder}/>
    );
}

export default Input;