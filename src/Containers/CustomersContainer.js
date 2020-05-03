import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../Components/AppFrame';
import CustomersList from '../Components/CustomersList';
import CustomerActions from '../Components/CustomerActions';
import { fetchCustomers } from './../Actions/fetchCustomers';

const customers = [
    {
        "dni": "27000000",
        "name": "Juan Perez",
        "age": 37
    },{
        "dni": "30000000",
        "name": "Pepito Juarez",
        "age": 38
    },{
        "dni": "35000000",
        "name": "Juan Hernandez",
        "age": 31
    }
];

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
                    body={this.renderBody(customers)}    
                />
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
        fetchCustomers: () => dispatch(fetchCustomers())
    }
)

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));