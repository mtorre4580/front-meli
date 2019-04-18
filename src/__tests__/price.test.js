import React from 'react';
import Price from '../components/commons/price/price';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Price />', () => {

    let value = {
        currency: 'BR',
        amount: 400
    };

    it('should render snapshot', () => {
        const component = renderer.create(<Price value={value} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be equal value props', () => {
        const wrapper = mount(<Price value={value} />);
        expect(wrapper.props().value).toEqual(value);
    });

    it('should be render currency ARS $', () => {
        value = {
            ...value,
            currency: 'ARS'
        };
        const wrapper = shallow(<Price value={value} />);
        expect(wrapper.find('.price').text()).toEqual('$400');
    });

    it('should be render currency PY U$S', () => {
        value = {
            ...value,
            currency: 'PY'
        };
        const wrapper = shallow(<Price value={value} />);
        expect(wrapper.find('.price').text()).toEqual('U$S400');
    });

    it('should be render currency PY U$S', () => {
        value = {
            ...value,
            currency: 'BR'
        };
        const wrapper = shallow(<Price value={value} />);
        expect(wrapper.find('.price').text()).toEqual('R$400');
    });

    it('should be render currency default', () => {
        delete value.currency;
        const wrapper = shallow(<Price value={value} />);
        expect(wrapper.find('.price').text()).toEqual('$400');
    });
     
 });


