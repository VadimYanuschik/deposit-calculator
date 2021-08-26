import React, {useState} from 'react';
import {SelectStyles} from './select.styles';

function Select({placeholder}) {
    const [isSelect, setIsSelect] = useState(false);
    const onChange = e => {
        setIsSelect(true)
    }
    return (
        <SelectStyles isSelect={isSelect} defaultValue={'DEFAULT'} onChange={onChange} name="currency" id="">
            <option value="DEFAULT" disabled>{placeholder}</option>
            <option value="BYN">BYN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
        </SelectStyles>
    );
}

export default Select;