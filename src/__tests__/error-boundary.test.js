import  React from 'react';
import ErrorBoundary from '../components/commons/error-boundary/error-boundary';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

const DummyComponent = () => {
    throw new Error;
};

const pauseErrorLogging = codeToRun => {
    const logger = console.error;
    console.error = () => {};
    codeToRun();
    console.error = logger;
};

describe('<ErrorBoundary />' , () => {
   
    it('should render snapshot', () => {
        const component = renderer.create(<ErrorBoundary><div>content mock</div></ErrorBoundary>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should catches error and render message', () => {
        pauseErrorLogging(() => {
            const wrapper = mount(
                <ErrorBoundary >
                    <DummyComponent />
                </ErrorBoundary>
            );
            expect(wrapper.text()).toEqual('Error ups!!');
        });
    });

})