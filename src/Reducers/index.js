import { combineReducers } from 'redux'; 
import { customers } from './Customers';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    customers,
    form: reduxForm
});