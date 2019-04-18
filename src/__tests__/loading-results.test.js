import React from 'react';
import LoadingResults from '../components/results/loading-results/loading-results';
import renderer from 'react-test-renderer';

describe('<LoadingResults />', () => {

    it('should render snapshot', () => {
        const component = renderer.create(<LoadingResults />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

 });



