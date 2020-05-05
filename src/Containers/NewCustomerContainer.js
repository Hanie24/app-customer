import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import CustomerEdit from '../Components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertCustomer } from './../Actions/insertCustomers';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values);
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }
    
    renderBodyNew = () => {
        return <CustomerEdit 
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleOnBack} 
        />
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Creación de nuevo cliente`}
                    body={this.renderBodyNew()}
                />
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, {insertCustomer})(NewCustomerContainer));