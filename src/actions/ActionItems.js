import * as types from '../constants/ActionTypes';

/**
 * Actions for items (searching and detail)
 */
export default class ActionItems {

    /**
     * @param {Object} query
     * @return Action
     */
    static searchingItems(query) {
        return {
            type: types.SEARCHING_ITEMS,
            query
        };
    }

    /**
     * @param {Object} data
     * @return Action
     */
    static searchingItemsSuccess(data) {
        return { 
            type: types.SEARCHING_ITEMS_SUCCESS, 
            data
        };
    }

    /**
     * @param {Object} error
     * @return Action
     */
    static searchingItemsError(error) {
        return {
            type: types.SEARCHING_ITEMS_ERROR, 
            error
        };
    }

    /**
     * @param {number} id
     * @return Action
     */
    static fecthingDetail(id) {
        return {
            type: types.FETCHING_DETAIL_ITEM,
            id
        };
    }

    /**
     * @param {Object} data
     * @return Action
     */
    static fecthingDetailSuccess(data) {
        return {
            type: types.FETCHING_DETAIL_ITEM_SUCCESS,
            data
        };
    }

    /**
     * @param {Object} error
     * @return Action
     */
    static fecthingDetailError(error) {
        return {
            type: types.FETCHING_DETAIL_ITEM_ERROR,
            error
        };
    }

}