import React from 'react';
import ItemDetail from '../components/detail/item-detail/item-detail';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<ItemDetail />', () => {

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
        location:'Capital Federal'
    };

    it('should render snapshot', () => {
        const component = renderer.create(<ItemDetail item={item} categories={categories} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be equal categories, items props', () => {
        const wrapper = mount(<ItemDetail item={item} categories={categories} />);
        expect(wrapper.props().categories).toEqual(categories);
        expect(wrapper.props().item).toEqual(item);
    });
     
});



