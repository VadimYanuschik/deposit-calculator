import DepositTypes from './deposit.types';

const INITIAL_STATE = {
    depositData: {
        depositAmount: null,
        currency: null,
        monthCount: null,
        interestRate: null,
        withCapitalization: false
    }
}

const depositReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DepositTypes.START_CALCULATIONS:
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default depositReducer