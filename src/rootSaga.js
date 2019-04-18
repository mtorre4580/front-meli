
import { all, fork } from 'redux-saga/effects'
import { watchSearchingItems, watchFetchingDetailItem } from './sagas/items';

/**
 * Root saga for app
 */
export default function* rootSaga() {
  yield all([fork(watchSearchingItems), fork(watchFetchingDetailItem)]);
}