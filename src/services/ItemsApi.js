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
    static search(query) {
        return axios.get(`${process.env.REACT_APP_API_URL}/items`, { params: { q: query } });
    }

    /**
     * Get all info from item by id item
     * @param {string} id
     * @returns {Promise}
     */
    static getDetail(id) {
        return axios.get(`${process.env.REACT_APP_API_URL}/items/${id}`);
    }

}
