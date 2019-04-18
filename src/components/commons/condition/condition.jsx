import './condition.scss';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Get condition item (mapper)
 * @param {string} condition 
 * @return {string}
 */
const getCondition = condition => {
    switch(condition) {
        case 'new':
            return 'Nuevo';
        case 'used':
            return 'Usado';
        default:
            return 'No especificado';
    }
}

const Condition = ({condition, sold_quantity}) => {
    return (
        <p className="condition"> 
            <span>{getCondition(condition)} - </span>
            <span>{sold_quantity} vendidos</span>
        </p>
    );
}

Condition.propTypes = {
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
}

Condition.defaultProps = {
    condition: 'not_specified',
    sold_quantity: 0
}

export default Condition;