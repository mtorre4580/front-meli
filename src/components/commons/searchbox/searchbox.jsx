import './searchbox.scss'
import React from 'react';
import SearchForm from '../searchform/searchform';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Searchbox = ({submit}) => {
    return (
        <header className="ctn-searchbox">
            <div className="container">
                <div className="searchbox">
                    <NavLink className="nav-logo" to='/' />
                    <div className="input-group-search">
                        <SearchForm placeholder="Nunca dejes de buscar" onSubmit={submit} />
                    </div>
                </div>
            </div>
        </header>
    );
}

Searchbox.propTypes = {
    submit: PropTypes.func
}

export default Searchbox;