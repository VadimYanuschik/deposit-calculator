import React, {useState} from 'react';
import {connect} from 'react-redux';
import {CalculatorContainer, FormContainer, TitleContainer, TitleText} from './calculator.styles';
import Input from '../input/input.component';
import Checkbox from '../checkbox/checkbox.component';
import Button from '../button/button.compoent';
import Select from '../select/select.component';
import {startCalculations} from '../../redux/deposit/deposit.actions';

function Calculator({startCalculations}) {
    const [depositAmount, setDepositAmount] = useState(150);
    const [currency, setCurrency] = useState('BYN');
    const [monthCount, setMonthCount] = useState(18);
    const [interestRate, setInterestRate] = useState(18);
    const [withCapitalization, setWithCapitalization] = useState(true);

    const handleClick = () => {
        startCalculations({depositAmount, currency, monthCount, interestRate, withCapitalization})
    }

    return (
        <CalculatorContainer>
            <TitleContainer>
                <TitleText>Yanuschik</TitleText>
                <TitleText>Bank</TitleText>
            </TitleContainer>
            <FormContainer>
                <Input onChange={e => {setDepositAmount(e.target.value)}} value={depositAmount} placeholder={'Сумма вклада'}/>
                <Select onChange={e => {setCurrency(e.target.value)}} placeholder={'Выберите валюту'}/>
                <Input onChange={e => setMonthCount(e.target.value)} value={monthCount} placeholder={'Кол-во месяцев'}/>
                <Input onChange={e => setInterestRate(e.target.value)} value={interestRate} placeholder={'Годовая ставка, %'}/>
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