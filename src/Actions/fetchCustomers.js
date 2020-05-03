import { FETCH_CUSTOMERS } from './../Constant';
import { createAction } from 'redux-actions';
import { apiGet } from '../Api';
import { url_Customers } from '../Api/urls';

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(url_Customers));