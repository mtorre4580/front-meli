import * as types from '../constants/ActionTypes';

let initalState = {
    data: {
        author: null,
        item: null,
        categories: []
    },
    loading: false,
    error: false
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.FETCHING_DETAIL_ITEM:
            return {
                ...state,
                id: payload.id,
                loading: true
            }
        case types.FETCHING_DETAIL_ITEM_SUCCESS:
            return {
                ...state,
                data: payload.data,
                loading: false,
                error: false
            }
        case types.FETCHING_DETAIL_ITEM_ERROR:
            return {
                ...state,
                data: null,
                loading: false,
                error: true
            }
        default:
            return state
    }
};
  