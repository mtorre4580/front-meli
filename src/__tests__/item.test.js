import React from 'react';
import Item from '../components/results/item/item';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Item />', () => {

    it('should render snapshot', () => {
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
        const component = renderer.create(<Router><Item item={item}/></Router>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});



