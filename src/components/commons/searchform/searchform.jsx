import './searchform.scss';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let SearchForm = ({placeholder, handleSubmit}) => {
    return (
        <form className="form-inline form-search" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="search_items">Search</label>
            <div className="input-group">
                <Field className="form-control" name="search" id="search_items" autoFocus component="input" maxLength="120" autoCapitalize="off" autoCorrect="off" spellCheck="false" autoComplete="off" placeholder={placeholder} type="text" />
                <div className="input-group-prepend">
                    <button className="input-group-text search" type="submit" />
                </div>
            </div>
        </form>
    );
}

SearchForm = reduxForm({ form: 'search' })(SearchForm)

SearchForm.propTypes = {
    placeholder: PropTypes.string,
    handleSubmit: PropTypes.func
}

SearchForm.defaultProps = {
    placeholder: 'Buscar',
}

export default SearchForm;
