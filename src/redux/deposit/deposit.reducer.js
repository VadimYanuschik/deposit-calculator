import DepositTypes from './deposit.types';
import {makeCalculations} from './deposit.utils';

const INITIAL_STATE = {
    isCalculationsFinish: false,
    depositData: {},
    calculations: {}
}

const depositReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DepositTypes.START_CALCULATIONS:
            return {
                ...state,
                depositData: action.payload,
                calculations: makeCalculations(action.payload),
                isCalculationsFinish: true
            }
        default:
            return state
    }
}

export default depositReducer