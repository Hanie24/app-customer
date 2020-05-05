import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../Components/AppFrame';
import CustomersList from '../Components/CustomersList';
import CustomerActions from '../Components/CustomerActions';
import { fetchCustomers } from '../Actions/fetchCustomers';
import { getCustomers } from '../Selectors/Custom';

class CustomersContainer extends Component {

    componentDidMount(){
        if(this.props.customers.length === 0){
            this.props.fetchCustomers();
        }
    }

    handleAddNew = () => {
        this.props.history.push('/customers/nuevo');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers}
                urlPath={'customers/'}
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
    customers: []
};

const mapStateToProps = state => ({
    customers: getCustomers(state)
})

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));