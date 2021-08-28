import {combineReducers} from 'redux';
import depositReducer from './deposit/deposit.reducer';

const rootReducer = combineReducers({
    deposit: depositReducer
})

export default rootReducer