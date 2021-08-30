import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    CalculationLine,
    Calculations,
    CalculationsBoxContainer,
    CalculatorFields,
    ShowCalculationsButton,
    CalculationsHistory
} from './calculations-box.styles';

function CalculationsBox({isCalculationsFinish, calculations, depositData}) {
    const [calculationsHistory, setCalculationsHistory] = useState(true);
    const handleClick = () => {
        setCalculationsHistory(!calculationsHistory)
    }

    const {amountWithTax, amountTotal, amountWithoutTax, amountOfTax, depositHistory} = calculations
    const {depositAmount, currency, interestRate, withCapitalization} = depositData
    
    return (
        <CalculationsBoxContainer isCalculationsFinish={isCalculationsFinish}>
            <CalculatorFields>
                <CalculationLine>Сумма вклада: <Calculations>{depositAmount} {currency}</Calculations></CalculationLine>
                <CalculationLine>Общая суммма
                    возврата: <Calculations>{amountTotal} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма процентов без вычета
                    налога: <Calculations>{amountWithTax} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма процентов с вычетом процентного
                    налога: <Calculations>{amountWithoutTax} {currency}</Calculations></CalculationLine>
                <CalculationLine>Сумма вычтенного процентого
                    налога: <Calculations>{amountOfTax} {currency}</Calculations></CalculationLine>
            </CalculatorFields>
            {withCapitalization ?
                <ShowCalculationsButton onClick={handleClick}>Полный расчет</ShowCalculationsButton> : null}
            <CalculationsHistory hidden={calculationsHistory}>
                {
                    depositHistory && depositHistory.map((enroll, index, elements) => {
                        if (!elements[index + 1]) return;
                        return (<p key={index}>{index + 1}-я капитализация: {elements[index]} +
                            ({elements[index]} * {interestRate} * 31) / (365 * 100)
                            = {elements[index + 1]}</p>)
                    })
                }
            </CalculationsHistory>
        </CalculationsBoxContainer>
    );
}

const mapStateToProps = ({deposit}) => {
    const {isCalculationsFinish, calculations, depositData} = deposit
    return {isCalculationsFinish, calculations, depositData}
}

export default connect(mapStateToProps)(CalculationsBox);