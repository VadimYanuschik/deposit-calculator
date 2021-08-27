import DepositTypes from './deposit.types';

export const startCalculations = depositData => ({
    type: DepositTypes.START_CALCULATIONS,
    payload: {...depositData}
})