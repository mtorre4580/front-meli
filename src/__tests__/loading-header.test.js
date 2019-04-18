import React from 'react';
import LoadingHeader from '../components/detail/loading-header/loading-header';
import renderer from 'react-test-renderer';

describe('<LoadingHeader />', () => {

    it('should render snapshot', () => {
        const component = renderer.create(<LoadingHeader />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

 });



