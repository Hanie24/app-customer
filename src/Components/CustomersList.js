import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomersListItem';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map( c => 
                        <CustomersListItem 
                            key={c.dni}
                            dni={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            deleteAction={'Eliminar'}
                            urlPath={urlPath} />)
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersList;