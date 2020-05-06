import React from 'react';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';

const CustomersListItem = ({ name, editAction, deleteAction, dni, urlPath }) => {
    return (
        <div className="customer-list-item">
            <div className="field">
                <Link to={`${urlPath}${dni}`}>{name}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${dni}/editar`}>{editAction}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${dni}/eliminar`}>{deleteAction}</Link>
            </div>
        </div>
    );
};

CustomersListItem.propTypes = {
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    deleteAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersListItem;