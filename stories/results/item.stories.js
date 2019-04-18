import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from '../../src/components/results/item/item';

const item = {
    id:'MLA769088925',
    title:'Ipod Touch 5g 32gb',
    price: {
        currency:'ARS',
        amount:3200,
        decimals:null
    },
    picture:'http://mla-s2-p.mlstatic.com/720812-MLA25738240210_072017-I.jpg',
    condition:'used',
    location:'Buenos Aires'
};

storiesOf('Results', module)
    .addDecorator(story => (
            <Router>
                {story()}
            </Router>
    ))
    .add('Item', withInfo(`Item cluster`)(() => {
        return <Item item={item} />;
    }));