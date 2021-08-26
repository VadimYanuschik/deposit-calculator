import React from 'react';
import {CalculatorContainer, FormContainer, TitleContainer, TitleText} from './calculator.styles';
import Input from '../input/input.component';
import Checkbox from '../checkbox/checkbox.component';
import Button from '../button/button.compoent';
import Select from '../select/select.component';

function Calculator() {
    return (
        <CalculatorContainer>
            <TitleContainer>
                <TitleText>Yanuschik</TitleText>
                <TitleText>Bank</TitleText>
            </TitleContainer>
            <FormContainer>
                <Input placeholder={'Сумма вклада'}/>
                <Select placeholder={'Выберите валюту'}/>
                <Input placeholder={'Кол-во месяцев'}/>
                <Input placeholder={'Годовая ставка, %'}/>
                <Checkbox id={'form-button'} labelText={'С капитализацией'}/>
                <Button text={'Рассчитать'}/>
            </FormContainer>
        </CalculatorContainer>
    );
}

export default Calculator;