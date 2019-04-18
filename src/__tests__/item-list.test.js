import React from 'react';
import ItemList from '../components/results/item-list/item-list';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<ItemList />', () => {

    const items = [
        {id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'http://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-I.jpg',condition:'used',location:'Capital Federal'},
        {id:'MLA766877875',title:'Ipod Classic 60gb',price:{currency:'ARS',amount:1250,decimals:null},picture:'http://mla-s2-p.mlstatic.com/947045-MLA29185741092_012019-I.jpg',condition:'used',location:'Buenos Aires'},
        {id:'MLA777676864',title:'Ipod Classic 30gb',price:{currency:'ARS',amount:1000,decimals:null},picture:'http://mla-s1-p.mlstatic.com/809984-MLA29730910940_032019-I.jpg',condition:'used',location:'Buenos Aires'},
        {id:'MLA769088925',title:'Ipod Touch 5g 32gb',price:{currency:'ARS',amount:3200,decimals:null},picture:'http://mla-s2-p.mlstatic.com/720812-MLA25738240210_072017-I.jpg',condition:'used',location:'Buenos Aires'}
    ];
    
    const categories = ['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod classic','80 GB'];

    it('should render snapshot', () => {
        const component = renderer.create(
            <Router>
                <ItemList items={items} categories={categories}/>
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});



