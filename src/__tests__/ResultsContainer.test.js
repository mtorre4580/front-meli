import React from 'react';
import { createMockStore } from 'redux-test-utils';
import ItemList from '../containers/ResultsContainer';
import shallowWithStore from '../__mocks__/shallowWithStore';
import toJson from 'enzyme-to-json';

describe('ResultsContainer', () => {

    let store;
    let state;

    beforeAll(() => {
        state = {
            items: {
                data: {
                    author: null,
                    categories: [],
                    items: []
                },
                loading: false,
                error: false
            }
        }   
        store = createMockStore(state)
      });

    it('should render success', () => {
      const container = shallowWithStore(<ItemList />, store);
      expect(container).toBeTruthy();
    });

    it('should render snapshot', () => {
        const container = shallowWithStore(<ItemList />, store);
        expect(toJson(container)).toMatchSnapshot();
    });

});

