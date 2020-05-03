import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../Constant/index';

/*export const Customers = handleActions({
    [FETCH_CUSTOMERS]: state => state,
}, {});*/

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload]
}, []);