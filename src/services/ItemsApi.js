import axios from 'axios';

/**
 * Items Service for API 
 */
export default class ItemsApi {

    /**
     * Get all results matched by query search
     * @param {string} query
     * @returns {Promise}
     */
    search(query) {
        return axios.get('/items', { params: { q: query } });
    }

    /**
     * Get all info from item by id item
     * @param {string} id
     * @returns {Promise}
     */
    getDetail(id) {
        return axios.get(`/items/${id}`);
    }

}
