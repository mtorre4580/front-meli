import { shallow } from 'enzyme';

/**
 *  Mock for shallow enzyme add store fake...
 */
const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};

export default shallowWithStore;