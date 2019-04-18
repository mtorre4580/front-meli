import * as types from '../constants/ActionTypes';

let initalState = {
    data: {
        author: null,
        categories: [],
        items: []
    },
    loading: false,
    error: false
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.SEARCHING_ITEMS:
            return {
                ...state,
                q: payload.query,
                loading: true
            }
        case types.SEARCHING_ITEMS_SUCCESS:
            return {
                ...state,
                data: payload.data,
                loading: false,
                error: false
            }
        case types.SEARCHING_ITEMS_ERROR:
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
  