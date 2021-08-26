import styled from 'styled-components';

export const SelectStyles = styled.select`
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  width: 100%;
  padding: 15px 17px;
  border: none;
  color: ${props => props.isSelect ? '#000' : 'gray'};
  
  cursor: pointer;
`