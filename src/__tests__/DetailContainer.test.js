import React from 'react';
import { createMockStore } from 'redux-test-utils';
import ItemDetail from '../containers/DetailContainer';
import shallowWithStore from '../__mocks__/shallowWithStore';
import toJson from 'enzyme-to-json';

describe('DetailContainer', () => {

    let store;
    let state;

    beforeAll(() => {
        state = {
            detail: {
                data: {
                    author: null,
                    item: null,
                    categories: []
                },
                loading: false,
                error: false
            }
        }   
        store = createMockStore(state)
      });

    it('should render success', () => {
      const container = shallowWithStore(<ItemDetail />, store);
      expect(container).toBeTruthy();
    });

    it('should render snapshot', () => {
        const container = shallowWithStore(<ItemDetail />, store);
        expect(toJson(container)).toMatchSnapshot();
    });

});

