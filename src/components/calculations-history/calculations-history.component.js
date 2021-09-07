import React from 'react'
import {CalculationsHistoryContainer} from './calculations-history.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
    selectDepositHistory,
    selectInterestRate
} from '../../redux/deposit/deposit.selectors';

function CalculationsHistory({hidden, interestRate, depositHistory}) {
    return (
        <CalculationsHistoryContainer hidden={hidden}>
            {
                depositHistory && depositHistory.map((enroll, index, elements) => {
                    if (!elements[index + 1]) return null;
                    return (<p key={index}>{index + 1}-я капитализация: {elements[index]} +
                        ({elements[index]} * {interestRate} * 31) / (365 * 100)
                        = {elements[index + 1]}</p>)
                })
            }
        </CalculationsHistoryContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    depositHistory: selectDepositHistory,
    interestRate: selectInterestRate
})

export default connect(mapStateToProps)(CalculationsHistory)