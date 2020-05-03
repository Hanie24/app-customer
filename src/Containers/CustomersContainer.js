import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../Components/AppFrame';
import CustomersList from '../Components/CustomersList';
import CustomerActions from '../Components/CustomerActions';
import { fetchCustomers } from './../Actions/fetchCustomers';

class CustomersContainer extends Component {

    componentDidMount(){
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers}
                urlPath={'customer/'}
            />
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers)}    
                />
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: [
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
    ]
};

export default withRouter(connect(null, { fetchCustomers })(CustomersContainer));