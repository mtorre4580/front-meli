import React from 'react';
import Results from '../components/results/results';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Results />', () => {

    it('should render snapshot', () => {
        const data = {author:{name:'Matias Daniel',lastname:'Torre'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod classic','80 GB'],items:[{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'http://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-I.jpg',condition:'used',location:'Capital Federal'},{id:'MLA766877875',title:'Ipod Classic 60gb',price:{currency:'ARS',amount:1250,decimals:null},picture:'http://mla-s2-p.mlstatic.com/947045-MLA29185741092_012019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA777676864',title:'Ipod Classic 30gb',price:{currency:'ARS',amount:1000,decimals:null},picture:'http://mla-s1-p.mlstatic.com/809984-MLA29730910940_032019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA769088925',title:'Ipod Touch 5g 32gb',price:{currency:'ARS',amount:3200,decimals:null},picture:'http://mla-s2-p.mlstatic.com/720812-MLA25738240210_072017-I.jpg',condition:'used',location:'Buenos Aires'}]};
        const loading = false;
        const error = false;
        const component = renderer.create(<Router><Results loading={loading} data={data} error={error} /></Router>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

 });



