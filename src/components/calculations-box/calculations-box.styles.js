import styled from 'styled-components';

export const CalculationsBoxContainer = styled.div`
  margin: 26px auto 26px auto;
  width: 100%;
  max-width: 832px;
  background-color: #F0F0F0;
  color: #6D6D6D;
  padding: 18px 22px;
  line-height: 29px;
  display: ${props => props.isCalculationsFinish ? 'block' : 'none'};
`

export const CalculatorFields = styled.div`
`

export const CalculationLine = styled.p`
    font-size: 16px;
`

export const Calculations = styled.span`
    font-weight: 500;
`