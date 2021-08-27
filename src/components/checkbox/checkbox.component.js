import React from 'react';
import {CheckboxContainer} from './checkbox.styles';

function Checkbox({id, labelText, ...otherProps}) {
    return (
        <CheckboxContainer leftAlign>
            <input {...otherProps} id={id} type="checkbox"/>
            <label htmlFor={id}>{labelText}</label>
        </CheckboxContainer>
    );
}

export default Checkbox;