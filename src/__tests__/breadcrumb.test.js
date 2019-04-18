import React from 'react';
import Breadcrumb from '../components/commons/breadcrumb/breadcrumb';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Breadcrumb />', () => {

    const categories = [
        'Electrónica, Audio y Video',
        'Audio',
        'Reproductores Portátiles',
        'iPod',
        'iPod touch',
        '32 GB'
    ];

    it('should render snapshot', () => {
        const component = renderer.create(<Breadcrumb categories={categories} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be equal size categories props', () => {
        const wrapper = mount(<Breadcrumb categories={categories} />);
        expect(wrapper.props().categories).toEqual(categories);
    });
     
 });



