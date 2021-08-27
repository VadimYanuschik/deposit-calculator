import {combineReducers} from 'redux';
import depositReducer from './deposit/deposit.reducer';

const rootReducer = combineReducers({
    depositData: depositReducer
})

export default rootReducer