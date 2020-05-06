import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import { getCustomerByDni } from '../Selectors/Custom'
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from './../Components/CustomerEdit';
import CustomerData from './../Components/CustomerData';
import {fetchCustomers} from './../Actions/fetchCustomers';
import { updateCustomer } from './../Actions/updateCustomers';
import { deleteCustomer } from './../Actions/deleteCustomers';

class CustomContent extends Component {

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }
    
    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const { id } = values;
        return this.props.updateCustomer(id, values)
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnDelete = id => {
        this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderCustomerControl = (isEdit, isDelete) => {
        if(this.props.customer){
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return <CustomerControl { ...this.props.customer} 
                onSubmit={this.handleSubmit}
                onSubmitSuccess={this.handleOnSubmitSuccess}
                onBack={this.handleOnBack}
                isDeleteAllow={!!isDelete}
                onDelete={this.handleOnDelete}
            /> 
        }

        return null;
    }

    renderBodyClient = () => (
        <Route path="/customers/:dni/eliminar" children={(
                { match: isEdit }) => (
                    <Route path="/customers/:dni/editar" children={(
                        {match: isDelete}) => (this.renderCustomerControl(isDelete, isEdit))}
                    />
                )
            }           
        />
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBodyClient()}    
                />
            </div>
        );
    }
}

CustomContent.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomContent));