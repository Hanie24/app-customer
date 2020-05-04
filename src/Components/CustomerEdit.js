import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../Helpers/setPropsAsInitial';
import CustomerActions from '../Components/CustomerActions';

const isRequired = value => (
    !value && 'Este campo es requerido'
);

const isNumber = value => (
    isNaN(Number(value)) && 'Debes ingresar un número'
)

/*Ejemplo de validaciones globales
const validate = values => {
    const error = { }

    if(!values.name){
        error.name = 'El campo nombre es requerido';
    }

    if(!values.dni){
        error.name = 'El dni es un campo obligatorio';
    }

    return error;
}*/

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type} />
        {
            meta.touched && meta.error && <span className="error">{meta.error}</span>
        }
    </div>
);


// submitting, handleSubmit son propiedades que provee redux-form
const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div className="customer-edit">
            <h2>Edición de el cliente </h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={MyField}
                    type="text"
                    validate={isRequired}
                    label='Nombre:'
                />
                <Field 
                    name="dni" 
                    component={MyField}
                    validate={[isRequired, isNumber]} 
                    label='Dni:'
                />
                <Field 
                    name="age" 
                    component={MyField}
                    type="number"
                    validate={[isNumber, isRequired]}
                    label='Edad:'
                />
                <CustomerActions>
                    <button type='submit' disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ 
    form: 'CustomerEdit',
    //validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);