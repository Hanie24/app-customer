import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import { getCustomerByDni } from '../Selectors/Custom'
import { Route } from 'react-router-dom';
import CustomerEdit from './../Components/CustomerEdit';
import CustomerData from './../Components/CustomerData';

class CustomContent extends Component {

    renderBodyClient = () => (
        <Route 
            path="/customers/:dni/editar"
            children={
                ({ match }) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl { ...this.props.customer} /> 
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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default connect(mapStateToProps, null)(CustomContent);