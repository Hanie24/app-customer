import { createAction } from 'redux-actions';
import { DELETE_CUSTOMERS } from "../Constant/index";
import { apiDelete } from './../Api';
import { url_Customers } from "./../Api/urls"

export const deleteCustomer = createAction(DELETE_CUSTOMERS, 
    id => apiDelete(url_Customers, id)() );