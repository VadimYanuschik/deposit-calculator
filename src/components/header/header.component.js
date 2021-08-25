import React from 'react';
import {HeaderContainer} from './header.styles';

function Header() {
    return (
        <HeaderContainer>
            <div>USD <span>2.5005</span></div>
            <div>EUR <span>2.9145</span></div>
            <div>RUB<sup>100</sup> <span>3.3845</span></div>
        </HeaderContainer>
    );
}

export default Header;