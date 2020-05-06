import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../Helpers/setPropsAsInitial';
import CustomerActions from '../Components/CustomerActions';
import { Prompt } from 'react-router-dom'

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

const toNumber = value => value && Number(value);

// submitting, handleSubmit, pristine, submitSucceeded son propiedades que provee redux-form
class CustomerEdit extends Component {

    componentDidMount() {
        if(this.txt){
            this.txt.focus();
        }
    }

    renderField = ({input, meta, type, label, name, whiteFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} 
                type={!type ? "text" : type} 
                ref={whiteFocus && (txt => this.txt = txt)}    
            />
            {
                meta.touched && meta.error && <span className="error">{meta.error}</span>
            }
        </div>
    );

    render(){
        const {handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props
        return (
            <div className="customer-edit">
                <form onSubmit={handleSubmit}>
                    <Field 
                        whiteFocus
                        name="name" 
                        component={this.renderField}
                        type="text"
                        validate={isRequired}
                        label='Nombre:'
                    />
                    <Field 
                        name="dni" 
                        component={this.renderField}
                        validate={[isRequired, isNumber]} 
                        label='Dni:'
                    />
                    <Field 
                        name="age" 
                        component={this.renderField}
                        type="number"
                        validate={[isNumber, isRequired]}
                        label='Edad:'
                        parse={toNumber}
                    />
                    <CustomerActions>
                        <button type='submit' disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                    </CustomerActions>
                    <Prompt 
                        when={!pristine && !submitSucceeded}
                        message="Se perderán los datos"
                    />
                </form>
            </div>
        );
    }
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