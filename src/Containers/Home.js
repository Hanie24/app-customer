import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from './../Components/AppFrame';
import CustomersActions from './../Components/CustomerActions';


class Home extends Component {

    handleOnClick = () => {
        console.log('handleOn Click');
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                />            
            </div>
        );
    }
}

export default withRouter(Home);