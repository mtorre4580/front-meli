import { items } from '../reducers/index';
import * as types from '../constants/ActionTypes';

// Mocks response API
const responseMockSearch = {author:{name:'Matias Daniel',lastname:'Torre'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod classic','80 GB'],items:[{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'http://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-I.jpg',condition:'used',location:'Capital Federal'},{id:'MLA766877875',title:'Ipod Classic 60gb',price:{currency:'ARS',amount:1250,decimals:null},picture:'http://mla-s2-p.mlstatic.com/947045-MLA29185741092_012019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA777676864',title:'Ipod Classic 30gb',price:{currency:'ARS',amount:1000,decimals:null},picture:'http://mla-s1-p.mlstatic.com/809984-MLA29730910940_032019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA769088925',title:'Ipod Touch 5g 32gb',price:{currency:'ARS',amount:3200,decimals:null},picture:'http://mla-s2-p.mlstatic.com/720812-MLA25738240210_072017-I.jpg',condition:'used',location:'Buenos Aires'}]};

describe('Items Reducers', () => {

    const initialState = {
        data: {
            author: null,
            item: null,
            categories: []
        },
        loading: false,
        error: false
    };

    it('should return the initial state', () => {
        const mockActionNotMatch = {
            type: 'ACTION_FAKE'
        };
        expect(items(initialState, mockActionNotMatch)).toEqual(initialState);
    });

    it('should handle SEARCHING_ITEMS', () => {
        const expectedState = {
            ...initialState,
            q: 'ipod',
            loading: true
        }
        const mockActionSearchingItems = {
            type: types.SEARCHING_ITEMS, 
            query: 'ipod'
        };
        expect(items(initialState, mockActionSearchingItems)).toEqual(expectedState);
    });
  
    it('should handle SEARCHING_ITEMS_SUCCESS', () => {
        const expectedState = {
            ...initialState,
            data: responseMockSearch,
            loading: false,
            error: false
        }
        const mockActionSearchingItemsSuccess = {
            type: types.SEARCHING_ITEMS_SUCCESS, 
            data: responseMockSearch
        };
        expect(items(initialState, mockActionSearchingItemsSuccess)).toEqual(expectedState);
    });

    it('should handle SEARCHING_ITEMS_ERROR', () => {
        const expectedState = {
            ...initialState,
            data: null,
            loading: false,
            error: true
        }
        const mockActionSearchingItemsError = {
            type: types.SEARCHING_ITEMS_ERROR, 
            error: new Error('Error in fetch search items')
        };
        expect(items(initialState, mockActionSearchingItemsError)).toEqual(expectedState);
    });

});