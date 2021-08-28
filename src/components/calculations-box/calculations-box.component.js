import React from 'react';
import {connect} from 'react-redux';
import {CalculationLine, Calculations, CalculationsBoxContainer, CalculatorFields} from './calculations-box.styles';

function CalculationsBox({isCalculationsFinish, calculations, depositAmount, currency}) {
    const {amountWithTax, amountTotal, amountWithoutTax, amountOfTax} = calculations
    return (
        <CalculationsBoxContainer isCalculationsFinish={isCalculationsFinish}>
            <CalculatorFields>
                <CalculationLine>Сумма вклада: <Calculations>{depositAmount} {currency}</Calculations></CalculationLine>
                <CalculationLine>Общая суммма возврата: <Calculations>{amountTotal} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма процентов без вычета налога: <Calculations>{amountWithTax} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма процентов с вычетом процентного налога: <Calculations>{amountWithoutTax} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма вычтенного процентого налога: <Calculations>{amountOfTax} {currency}</Calculations></CalculationLine>
            </CalculatorFields>
        </CalculationsBoxContainer>
    );
}

const mapStateToProps = ({deposit}) => {
    const {isCalculationsFinish, calculations, depositData: {depositAmount, currency}} = deposit
    return {isCalculationsFinish, calculations, depositAmount, currency}
}

export default connect(mapStateToProps)(CalculationsBox);