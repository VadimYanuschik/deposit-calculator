import React from 'react';
import {CalculationLine, Calculations, CalculationsBoxContainer, CalculatorFields} from './calculations-box.styles';

function CalculationsBox({isCalculationsComplete}) {
    return (
        <CalculationsBoxContainer isCalculationsComplete={isCalculationsComplete}>
            <CalculatorFields>
                <CalculationLine>Сумма процентов без вычета налога: <Calculations>57,72
                    BYN</Calculations></CalculationLine>
                <CalculationLine>Общая суммма возврата: <Calculations>57,72 BYN</Calculations></CalculationLine>
                <CalculationLine>Сумма процентов с вычетом процентного налога: <Calculations>57,72
                    BYN</Calculations></CalculationLine>
                <CalculationLine>Сумма вклада: <Calculations>57,72 BYN</Calculations></CalculationLine>
                <CalculationLine>Сумма вычтенного процентого налога: <Calculations>57,72
                    BYN</Calculations></CalculationLine>
            </CalculatorFields>
        </CalculationsBoxContainer>
    );
}

export default CalculationsBox;