import React from 'react';
import Error from '../components/commons/error/error';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Error />', () => {

    let title = 'Se produjo un error';
    let content = 'No se pudieron obtener resultados';

    it('should render snapshot', () => {
        const component = renderer.create(<Error title={title} content={content} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be equal title and condition props', () => {
        const wrapper = mount(<Error title={title} content={content} />);
        expect(wrapper.props().title).toEqual(title);
        expect(wrapper.props().content).toEqual(content);
    });
     
 });


