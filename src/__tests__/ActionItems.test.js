import ActionItems from '../actions/ActionItems';
import * as types from '../constants/ActionTypes';

// Mocks response API
const responseMockSearch = {author:{name:'Matias Daniel',lastname:'Torre'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod classic','80 GB'],items:[{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'http://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-I.jpg',condition:'used',location:'Capital Federal'},{id:'MLA766877875',title:'Ipod Classic 60gb',price:{currency:'ARS',amount:1250,decimals:null},picture:'http://mla-s2-p.mlstatic.com/947045-MLA29185741092_012019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA777676864',title:'Ipod Classic 30gb',price:{currency:'ARS',amount:1000,decimals:null},picture:'http://mla-s1-p.mlstatic.com/809984-MLA29730910940_032019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA769088925',title:'Ipod Touch 5g 32gb',price:{currency:'ARS',amount:3200,decimals:null},picture:'http://mla-s2-p.mlstatic.com/720812-MLA25738240210_072017-I.jpg',condition:'used',location:'Buenos Aires'}]};
const responseMockDetail = {author:{name:'Matias Daniel',lastname:'Torre'},item:{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'https://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-O.jpg',condition:'used',free_shipping: false,sold_quantity:0,description:'iPod Touch 4\nCapacidad 32 gB\nPantalla Retina de 3,5 pulgadas\n\nEl producto no esta funcionando\nLa pantalla se salio del chasis'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod touch','32 GB']};

describe('Item Actions', () => {

    describe('SearchingItems', () => {
        it('should create an action to search items', () => {
            const expectedAction = {
                type: types.SEARCHING_ITEMS,
                query: 'ipod'
            }
            expect(ActionItems.searchingItems('ipod')).toEqual(expectedAction);
        });
        it('should create an action to set payload items notify success', () => {
            const expectedAction = {
                type: types.SEARCHING_ITEMS_SUCCESS,
                data: responseMockSearch
            }
            expect(ActionItems.searchingItemsSuccess(responseMockSearch)).toEqual(expectedAction);
        });
        it('should create an action to set error', () => {
            const expectedAction = {
                type: types.SEARCHING_ITEMS_ERROR,
                error: new Error('Falied to fecth data')
            }
            expect(ActionItems.searchingItemsError(new Error('Falied to fecth data'))).toEqual(expectedAction);
        });
    });

    describe('DetailItems', () => {
        it('should create an action to fetch detail item', () => {
            const expectedAction = {
                type: types.FETCHING_DETAIL_ITEM,
                id: 'MLA772322281'
            }
            expect(ActionItems.fecthingDetail('MLA772322281')).toEqual(expectedAction);
        });
        it('should create an action to set data detail info notify success', () => {
            const expectedAction = {
                type: types.FETCHING_DETAIL_ITEM_SUCCESS,
                data: responseMockDetail
            }
            expect(ActionItems.fecthingDetailSuccess(responseMockDetail)).toEqual(expectedAction);
        });
        it('should create an action to set error', () => {
            const expectedAction = {
                type: types.FETCHING_DETAIL_ITEM_ERROR,
                error: new Error('Falied to fecth data detail')
            }
            expect(ActionItems.fecthingDetailError(new Error('Falied to fecth data detail'))).toEqual(expectedAction);
        });
    });

});