import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    CalculationLine,
    Calculations,
    CalculationsBoxContainer,
    CalculatorFields,
    ShowCalculationsButton
} from './calculations-box.styles';

import CalculationsHistory from '../calculations-history/calculations-history.component';
import {selectCalculations, selectDepositData, selectIsCalculationsFinish} from '../../redux/deposit/deposit.selectors';
import {createStructuredSelector} from 'reselect';

function CalculationsBox({isCalculationsFinish, calculations, depositData}) {
    const [calculationsHistory, setCalculationsHistory] = useState(true);
    const handleClick = () => {
        setCalculationsHistory(!calculationsHistory)
    }

    const {amountWithTax, amountTotal, amountWithoutTax, amountOfTax} = calculations
    const {depositAmount, currency, withCapitalization} = depositData

    return (
        <CalculationsBoxContainer isCalculationsFinish={isCalculationsFinish}>
            <CalculatorFields>
                <CalculationLine>Сумма вклада: <Calculations>{depositAmount} {currency}</Calculations></CalculationLine>
                <CalculationLine>Общая сумма
                    возврата: <Calculations>{amountTotal} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма процентов без вычета
                    налога: <Calculations>{amountWithTax} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма процентов с вычетом процентного
                    налога: <Calculations>{amountWithoutTax} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма вычтенного процентного
                    налога: <Calculations>{amountOfTax} {currency}</Calculations></CalculationLine>
            </CalculatorFields>
            {withCapitalization ?
                <ShowCalculationsButton onClick={handleClick}>Полный расчет</ShowCalculationsButton> : null}
            <CalculationsHistory hidden={calculationsHistory}/>
        </CalculationsBoxContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    calculations: selectCalculations,
    depositData: selectDepositData,
    isCalculationsFinish: selectIsCalculationsFinish
})

export default connect(mapStateToProps)(CalculationsBox);