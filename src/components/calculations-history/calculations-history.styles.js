import styled from 'styled-components';

export const CalculationsHistoryContainer = styled.div`
    display: ${props => props.hidden ? 'none' : 'block'};
`