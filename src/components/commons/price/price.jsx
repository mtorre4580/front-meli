import './price.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Price = ({value}) => {
    return (
        <p className="price">
            <span>{getCurrency(value.currency)}</span>{parseInt(value.amount).toLocaleString()}
        </p>
    );
}

/**
 * Get the correct type for country
 * @param {string} currency 
 * @return {string}
 */
const getCurrency = (currency) => {
    switch(currency) {
        case 'ARS': 
            return '$';
        case 'BR':
            return 'R$';
        case 'PY':
            return 'U$S';
        default:
            return '$';
    }
}

Price.propTypes = {
    value: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number
    })
}

export default Price;