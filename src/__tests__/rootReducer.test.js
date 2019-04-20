import rootReducer from '../rootReducer';
import { createStore } from 'redux';
import { items, detail } from '../reducers/index';

describe('rootReducer', () => {
    it('should create store with rootReducer default', () => {
        let store = createStore(rootReducer);
        expect(store.getState().items).toEqual(items(undefined, {}))
        expect(store.getState().detail).toEqual(detail(undefined, {}))
    });
});