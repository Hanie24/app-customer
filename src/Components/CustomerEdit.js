import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../Helpers/setPropsAsInitial';

const isRequired = value => (
    !value && 'Este campo es requerido'
);

const isNumber = value => (
    isNaN(Number(value)) && 'Debes ingresar un número'
)

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type} />
        {
            meta.touched && meta.error && <span className="error">{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div className="customer-edit">
            <h2>Edición de el cliente </h2>
            <form>
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
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit'})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);