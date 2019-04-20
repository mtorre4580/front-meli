import { put, call, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes';
import { push } from "react-router-redux";
import ActionItems from '../actions/ActionItems';
import ItemsApi from '../services/ItemsApi';

export function* searchItems({query}) {
    try {
        const response = yield call(ItemsApi.search, query);
        yield put(push(`/items?search=${query}`)); 
        yield put(ActionItems.searchingItemsSuccess(response.data));
    } catch(err) {
        yield put(ActionItems.searchingItemsError(err));
    }
}

export function* fetchDetail({id}) {
    try {
        const response = yield call(ItemsApi.getDetail, id);
        yield put(ActionItems.fecthingDetailSuccess(response.data));
    } catch(err) {
        yield put(ActionItems.fecthingDetailError(err));
    }
}

export function* watchSearchingItems() {
  yield takeLatest(types.SEARCHING_ITEMS, searchItems);
}

export function* watchFetchingDetailItem() {
  yield takeLatest(types.FETCHING_DETAIL_ITEM, fetchDetail);
}

export default { watchSearchingItems, watchFetchingDetailItem };