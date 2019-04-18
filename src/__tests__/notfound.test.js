import React from 'react';
import NotFound from '../components/commons/notfound/notfound';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<NotFound />', () => {

    it('should render snapshot', () => {
        const component = renderer.create(
            <Router>
                <NotFound />
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with title not found', () => {
        const wrapper = shallow(<NotFound />);
        const title = <h2 className='title-err'>Parece que esta página no existe</h2>;
        expect(wrapper.contains(title)).toEqual(true);
    });
     
 });



