import React from 'react';
import {ButtonContainer} from './button.styles';

function Button({text}) {
    return (
        <ButtonContainer>{text}</ButtonContainer>
    );
}

export default Button;