import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    CalculatorContainer,
    ErrorContainer,
    FormContainer,
    TitleContainer,
    TitleText
} from './calculator.styles';
import Input from '../input/input.component';
import Checkbox from '../checkbox/checkbox.component';
import Button from '../button/button.compoent';
import Select from '../select/select.component';
import {startCalculations} from '../../redux/deposit/deposit.actions';

function Calculator({startCalculations}) {
    const [selectError, setSelectError] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [depositAmount, setDepositAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [monthCount, setMonthCount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [withCapitalization, setWithCapitalization] = useState(false);

    const handleClick = () => {
        const isInputValid = inputValidator()
        const isSelectValid = selectValidator()
        if(isInputValid && isSelectValid)
            startCalculations({depositAmount, currency, monthCount, interestRate, withCapitalization})
    }

    const selectValidator = () => {
        if(currency) {
            setSelectError(false)
            return true
        }
        else {
            setSelectError(true)
            return false
        }
    }

    const inputValidator = () => {
        if(depositAmount && monthCount && interestRate) {
            setInputError(false)
            return true
        } else {
            setInputError(true)
            return false
        }
    }

    const handleLetters = (e) => {
        e = e.replace(/[^0-9\\.]/g,'');
        if(e.split('.').length>2)
            e = e.replace(/\.+$/,"");
            if(e.split('.')[1] && e.split('.')[1].length > 2)
                e = e.slice(0, -1)
        return e
    }

    return (
        <CalculatorContainer>
            <TitleContainer>
                <TitleText>Yanuschik</TitleText>
                <TitleText>Bank</TitleText>
            </TitleContainer>
            <FormContainer>
                <Input onChange={e => {setDepositAmount(handleLetters(e.target.value))}} type='number' value={depositAmount} placeholder={'?????????? ????????????'}/>
                <Select onChange={e => {setCurrency(e.target.value)}} placeholder={'???????????????? ????????????'}/>
                <Input onChange={e => setMonthCount(handleLetters(e.target.value))} type='number' value={monthCount} placeholder={'??????-???? ??????????????'}/>
                <Input onChange={e => setInterestRate(handleLetters(e.target.value))} type='number' value={interestRate} placeholder={'?????????????? ????????????, %'}/>
                <Checkbox onChange={e => setWithCapitalization(!withCapitalization)} checked={withCapitalization} id={'form-button'} labelText={'?? ????????????????????????????'}/>
                {selectError ? <ErrorContainer>???????????????? ????????????</ErrorContainer> : null}
                {inputError ? <ErrorContainer>?????????????????? ?????? ????????</ErrorContainer> : null}
                <Button onClick={handleClick} text={'????????????????????'}/>
            </FormContainer>
        </CalculatorContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    startCalculations: depositData => dispatch(startCalculations(depositData))
})

export default connect(null, mapDispatchToProps)(Calculator);