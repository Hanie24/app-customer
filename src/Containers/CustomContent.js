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

class CustomContent extends Component {

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }
    
    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const { id } = values;
        this.props.updateCustomer(id, values)
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBodyClient = () => (
        <Route 
            path="/customers/:dni/editar"
            children={
                ({ match }) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl { ...this.props.customer} 
                        onSubmit={this.handleSubmit}
                        onBack={this.handleOnBack}
                    /> 
                }
            }
        />
    )
    //<p>Datos del client "{this.props.customer.name}" </p>

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
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer
})(CustomContent));