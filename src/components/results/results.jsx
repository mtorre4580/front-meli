import React, { Fragment } from 'react';
import LoadingResults from './loading-results/loading-results';
import ItemList from './item-list/item-list';
import Error from '../commons/error/error';

export default ({data, loading, error}) => (
    <Fragment>
        { !error && loading && <LoadingResults title="Buscando resultados" />}
        { !error && !loading && data.items && <ItemList items={data.items} categories={data.categories}/> }
        { error && !loading && <Error title='Ups se produjo un error!' content='Por favor intentá en unos minutos' />}
    </Fragment>
 );

