import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../Helpers/setPropsAsInitial';

const isRequired = value => (
    !value && 'Este campo es requerido'
);

const MyField = ({input, meta}) => (
    <div>
        <input {...input} type="text" />
        {
            meta.touched && meta.error && <span className="error">{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edición de el cliente </h2>
            <form>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <Field 
                        name="name" 
                        component={MyField}
                        type="text"
                        validate={isRequired}
                    />
                </div>
                <div>
                    <label htmlFor="dni">Dni:</label>
                    <Field 
                        name="dni" 
                        component={MyField}
                        validate={isRequired} 
                    />
                </div>
                <div>
                    <label htmlFor="age">Edad:</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
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