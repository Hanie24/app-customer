import { FETCH_CUSTOMERS } from './../Constant';
import { createAction } from 'redux-actions';
import { apiGet } from '../Api';
import { url_Customers } from '../Api/urls';

/*const customers = [
    {
        "dni": "27000000",
        "name": "Juan Perez",
        "age": 37
    },{
        "dni": "30000000",
        "name": "José Juarez",
        "age": 38
    },{
        "dni": "35000000",
        "name": "Juan Hernandez",
        "age": 31
    }
];*/

//export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(url_Customers));