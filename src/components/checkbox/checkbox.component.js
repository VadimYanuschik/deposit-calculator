import React from 'react';
import {CheckboxContainer} from './checkbox.styles';

function Checkbox({id, labelText}) {
    return (
        <CheckboxContainer leftAlign>
            <input id={id} type="checkbox"/>
            <label htmlFor={id}>{labelText}</label>
        </CheckboxContainer>
    );
}

export default Checkbox;