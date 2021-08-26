import React from 'react';
import currencies from './header.data';
import {HeaderContainer} from './header.styles';

function Header() {
    const {usd, eur, rub} = currencies
    return (
        <HeaderContainer>
            <div>USD <span>{usd}</span></div>
            <div>EUR <span>{eur}</span></div>
            <div>RUB<sup>100</sup> <span>{rub}</span></div>
        </HeaderContainer>
    );
}

export default Header;