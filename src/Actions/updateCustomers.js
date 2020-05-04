import { createAction } from 'redux-actions';
import { UPDATE_CUSTOMERS } from "../Constant/index";
import { apiPut } from './../Api';
import { url_Customers } from "./../Api/urls"

export const updateCustomer = createAction(UPDATE_CUSTOMERS, 
    (id, customer) => apiPut(url_Customers, id, customer)() );