import {createSelector} from 'reselect';

const selectDeposit = state => state.deposit

export const selectCalculations = createSelector(
    [selectDeposit],
    deposit => deposit.calculations
)

export const selectDepositData = createSelector(
    [selectDeposit],
    deposit => deposit.depositData
)

export const selectIsCalculationsFinish = createSelector(
    [selectDeposit],
    deposit => deposit.isCalculationsFinish
)

export const selectDepositHistory = createSelector(
    [selectCalculations],
    calculations => calculations.depositHistory
)

export const selectInterestRate = createSelector(
    [selectDepositData],
    depositData => depositData.interestRate
)