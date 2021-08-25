import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  align-self: ${props => props.leftAlign ? "flex-start" : ''};
  
  
  label {
    margin-left: 10px;
  }
  input, label {
    cursor: pointer;
  }
`