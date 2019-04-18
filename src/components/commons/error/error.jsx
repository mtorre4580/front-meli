import './error.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Error = ({title, content}) => (
    <div className="error-ctn">
        <h2 className="title-err">{title}</h2>
        <p>{content}</p>
    </div>
);

Error.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

Error.defaultProps = {
    title: 'Se produjo un error',
    content: 'Intentá más tarde'
}

export default Error;