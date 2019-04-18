import React from 'react';
import Detail from '../components/detail/detail';
import renderer from 'react-test-renderer';

const responseMockDetail = {author:{name:'Matias Daniel',lastname:'Torre'},item:{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'https://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-O.jpg',condition:'used',free_shipping: false,sold_quantity:0,description:'iPod Touch 4\nCapacidad 32 gB\nPantalla Retina de 3,5 pulgadas\n\nEl producto no esta funcionando\nLa pantalla se salio del chasis'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod touch','32 GB']};

describe('<Detail />', () => {

    it('should render snapshot', () => {
        const data = responseMockDetail;
        const loading = false;
        const error = false;
        const component = renderer.create(<Detail loading={loading} data={data} error={error} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

 });



