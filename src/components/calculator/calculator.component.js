import React, {useState} from 'react';
import {connect} from 'react-redux';
import {CalculatorContainer, FormContainer, TitleContainer, TitleText} from './calculator.styles';
import Input from '../input/input.component';
import Checkbox from '../checkbox/checkbox.component';
import Button from '../button/button.compoent';
import Select from '../select/select.component';
import {startCalculations} from '../../redux/deposit/deposit.actions';

function Calculator({startCalculations}) {
    const [depositAmount, setDepositAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [monthCount, setMonthCount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [withCapitalization, setWithCapitalization] = useState(false);

    const handleClick = () => {
        startCalculations({depositAmount, currency, monthCount, interestRate, withCapitalization})
    }

    const handleLetters = (e) => {
        e = e.replace(/[^0-9\.]/g,'');
        if(e.split('.').length>2)
            e = e.replace(/\.+$/,"");
        return e
    }

    return (
        <CalculatorContainer>
            <TitleContainer>
                <TitleText>Yanuschik</TitleText>
                <TitleText>Bank</TitleText>
            </TitleContainer>
            <FormContainer>
                <Input onChange={e => {setDepositAmount(handleLetters(e.target.value))}} type='number' value={depositAmount} placeholder={'Сумма вклада'}/>
                <Select onChange={e => {setCurrency(e.target.value)}} placeholder={'Выберите валюту'}/>
                <Input onChange={e => setMonthCount(handleLetters(e.target.value))} type='number' value={monthCount} placeholder={'Кол-во месяцев'}/>
                <Input onChange={e => setInterestRate(handleLetters(e.target.value))} type='number' value={interestRate} placeholder={'Годовая ставка, %'}/>
                <Checkbox onChange={e => setWithCapitalization(!withCapitalization)} checked={withCapitalization} id={'form-button'} labelText={'С капитализацией'}/>
                <Button onClick={handleClick} text={'Рассчитать'}/>
            </FormContainer>
        </CalculatorContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    startCalculations: depositData => dispatch(startCalculations(depositData))
})

export default connect(null, mapDispatchToProps)(Calculator);