import './breadcrumb.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({categories}) => {
    return (
        <nav>
            <ol className="breadcrumb">
                {categories.map((category, i) => <li className="breadcrumb-item" key={i}>{category}</li>)}
            </ol>
        </nav>
    )
}

Breadcrumb.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Breadcrumb;