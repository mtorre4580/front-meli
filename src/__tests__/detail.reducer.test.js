import { detail } from '../reducers/index';
import * as types from '../constants/ActionTypes';

// Mocks response API
const responseMockDetail = {author:{name:'Matias Daniel',lastname:'Torre'},item:{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'https://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-O.jpg',condition:'used',free_shipping: false,sold_quantity:0,description:'iPod Touch 4\nCapacidad 32 gB\nPantalla Retina de 3,5 pulgadas\n\nEl producto no esta funcionando\nLa pantalla se salio del chasis'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod touch','32 GB']};

describe('Detail Reducers', () => {

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
        expect(detail(initialState, mockActionNotMatch)).toEqual(initialState);
    });

    it('should handle FETCHING_DETAIL_ITEM', () => {
        const expectedState = {
            ...initialState,
            id: 'MLA772322281',
            loading: true
        }
        const mockActionFetchingDetailItem = {
            type: types.FETCHING_DETAIL_ITEM, 
            id: 'MLA772322281'
        };
        expect(detail(initialState, mockActionFetchingDetailItem)).toEqual(expectedState);
    });
  
    it('should handle FETCHING_DETAIL_ITEM_SUCCESS', () => {
        const expectedState = {
            ...initialState,
            data: responseMockDetail,
            loading: false,
            error: false
        }
        const mockActionFetchingDetailSuccess = {
            type: types.FETCHING_DETAIL_ITEM_SUCCESS, 
            data: responseMockDetail
        };
        expect(detail(initialState, mockActionFetchingDetailSuccess)).toEqual(expectedState);
    });

    it('should handle FETCHING_DETAIL_ITEM_ERROR', () => {
        const expectedState = {
            ...initialState,
            data: null,
            loading: false,
            error: true
        }
        const mockActionFecthingDetailError = {
            type: types.FETCHING_DETAIL_ITEM_ERROR, 
            error: new Error('Error in fetch detail')
        };
        expect(detail(initialState, mockActionFecthingDetailError)).toEqual(expectedState);
    });

});