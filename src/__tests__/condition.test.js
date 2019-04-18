import React from 'react';
import Condition from '../components/commons/condition/condition';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Condition />', () => {

    let condition = 'new';
    const sold_quantity = 30;

    it('should render snapshot', () => {
        const component = renderer.create(<Condition condition={condition} sold_quantity={sold_quantity} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be equal condition and sold_quantity props', () => {
        const wrapper = mount(<Condition condition={condition} sold_quantity={sold_quantity} />);
        expect(wrapper.props().condition).toEqual(condition);
        expect(wrapper.props().sold_quantity).toEqual(sold_quantity);
    });

    it('should be render used condition', () => {
        condition = 'used';
        const wrapper = shallow(<Condition condition={condition} sold_quantity={sold_quantity} />);
        expect(wrapper.find('span').first().text()).toEqual('Usado - ');
    });
    
    it('should be render default condition', () => {
        const wrapper = shallow(<Condition sold_quantity={sold_quantity} />);
        expect(wrapper.find('span').first().text()).toEqual('No especificado - ');
    });
     
 });


