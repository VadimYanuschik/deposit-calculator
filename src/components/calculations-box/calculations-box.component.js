import React from 'react';
import {CalculationLine, Calculations, CalculationsBoxContainer} from './calculations-box.styles';

function CalculationsBox() {
    return (
        <CalculationsBoxContainer>
            <CalculationLine>Сумма процентов без вычета налога: <Calculations>57,72 BYN</Calculations></CalculationLine>
            <CalculationLine>Общая суммма возврата: <Calculations>57,72 BYN</Calculations></CalculationLine>
            <CalculationLine>Сумма процентов с вычетом процентного налога: <Calculations>57,72 BYN</Calculations></CalculationLine>
            <CalculationLine>Сумма вклада: <Calculations>57,72 BYN</Calculations></CalculationLine>
            <CalculationLine>Сумма вычтенного процентого налога: <Calculations>57,72 BYN</Calculations></CalculationLine>
        </CalculationsBoxContainer>
    );
}

export default CalculationsBox;