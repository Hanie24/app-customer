import { FETCH_CUSTOMERS } from './../Constant';
import { createAction } from 'redux-actions';

export const fetchCustomers = createAction(FETCH_CUSTOMERS);