import React from 'react';
import {ButtonContainer} from './button.styles';

function Button({text, ...otherProps}) {
    return (
        <ButtonContainer {...otherProps}>{text}</ButtonContainer>
    );
}

export default Button;