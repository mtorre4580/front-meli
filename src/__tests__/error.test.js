import React from 'react';
import Error from '../components/commons/error/error';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('<Error />', () => {

    let title = 'Se produjo un error';
    let content = 'No se pudieron obtener resultados';

    it('should render snapshot', () => {
        const component = renderer.create(
            <Router>
                <Error title={title} content={content} />
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
     
 });


