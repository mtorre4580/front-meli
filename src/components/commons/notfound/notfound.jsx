import './notfound.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
    <div className="not-found">
        <h2 className="title-err">Parece que esta página no existe</h2>
        <NavLink to='/'>Ir a la página principal</NavLink>
    </div>
);

export default NotFound;