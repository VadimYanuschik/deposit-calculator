import React from 'react';
import {SelectStyles} from './select.styles';

function Select({placeholder, ...otherProps}) {
    return (
        <SelectStyles {...otherProps} defaultValue={'DEFAULT'} name="currency" id="">
            <option value="DEFAULT" disabled>{placeholder}</option>
            <option value="BYN">BYN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
        </SelectStyles>
    );
}

export default Select;