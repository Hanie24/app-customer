import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../Constant';

export const Customers = handleActions({
    [FETCH_CUSTOMERS]: state => state,
}, {});