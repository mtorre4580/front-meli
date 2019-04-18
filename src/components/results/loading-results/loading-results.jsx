import './loading-results.scss';
import React from 'react';
import PropTypes from 'prop-types';

const LoadingResults = ({title}) => (
    <div className="loader-results">{title}</div>
);

LoadingResults.propTypes = {
    title: PropTypes.string
}

LoadingResults.defaultProps = {
    title: 'Cargando...'
}

export default LoadingResults;