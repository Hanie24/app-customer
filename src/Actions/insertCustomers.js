import { createAction } from 'redux-actions';
import { INSERT_CUSTOMERS } from "../Constant/index";
import { apiPost } from './../Api';
import { url_Customers } from "./../Api/urls"

export const insertCustomer = createAction(INSERT_CUSTOMERS, 
    customer => apiPost(url_Customers, customer)() );