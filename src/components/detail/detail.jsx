import React, { Fragment } from 'react';
import LoadingHeader from './loading-header/loading-header';
import ItemDetail from './item-detail/item-detail';
import Error from '../commons/error/error';

export default ({data, loading, error}) => (
    <Fragment>
         { loading && <LoadingHeader />}
         { !loading && data.item!==null && !error && <ItemDetail item={data.item} categories={data.categories} /> }
         { !loading && error && <Error title='Ups se produjo un error!' content='Por favor intentá en unos minutos' />}
    </Fragment>
 );

