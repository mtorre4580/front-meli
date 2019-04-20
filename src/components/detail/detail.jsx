import React, { Fragment } from 'react';
import LoadingHeader from './loading-header/loading-header';
import ItemDetail from './item-detail/item-detail';
import Error from '../commons/error/error';

export default ({data, loading, error}) => (
    <Fragment>
         { !error && loading && <LoadingHeader />}
         { !error && !loading && data.item!==null && <ItemDetail item={data.item} categories={data.categories} /> }
         { error && !loading && <Error title='Ups se produjo un error!' content='Por favor intentá en unos minutos' />}
    </Fragment>
 );

