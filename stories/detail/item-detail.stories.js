import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemDetail from '../../src/components/detail/item-detail/item-detail';

const categories = [
    'Electrónica, Audio y Video',
    'Audio',
    'Reproductores Portátiles',
    'iPod',
    'iPod touch',
    '32 GB'
];

const item = {
    id:'MLA772322281',
    title:'Ipod Touch 4ta Generacion 32 Gb',
    price: {
        currency:'ARS',
        amount:680,
        decimals:null
    },
    picture:'http://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-I.jpg',
    condition:'used',
    location:'Capital Federal',
    description: 'Testing prueba...'
};

storiesOf('Detail', module)
    .addDecorator(story => (
        <Router>
            {story()}
        </Router>
    ))
    .add('ItemDetail', withInfo(`Detalle de un item`)(() => {
        return <ItemDetail item={item} categories={categories} />
    }));