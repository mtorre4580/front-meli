import React from 'react';
import { createMockStore } from 'redux-test-utils';
import Searchbox from '../containers/SearchboxContainer';
import shallowWithStore from '../__mocks__/shallowWithStore';
import toJson from 'enzyme-to-json';

describe('SearchboxContainer', () => {

    let store;
    let state;

    beforeAll(() => {
        state = {
            form: {
               
            }
        }   
        store = createMockStore(state)
      });

    it('should render success', () => {
      const container = shallowWithStore(<Searchbox />, store);
      expect(container).toBeTruthy();
    });

    it('should render snapshot', () => {
        const container = shallowWithStore(<Searchbox />, store);
        expect(toJson(container)).toMatchSnapshot();
    });

});

