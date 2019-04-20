import { all, fork } from 'redux-saga/effects';
import rootSaga from '../rootSaga';
import { watchSearchingItems, watchFetchingDetailItem } from '../sagas/items';

describe('rootSaga', () => {
    const watchAll = rootSaga()
    it('should generate rootSaga default', () => {
      const effect = watchAll.next().value;
      expect(effect).toEqual(all([
        fork(watchSearchingItems),
        fork(watchFetchingDetailItem)
      ]));
    });
});