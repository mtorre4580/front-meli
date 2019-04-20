import { put, call, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { push } from "react-router-redux";
import ItemsApi from '../services/ItemsApi';
import { searchItems, fetchDetail, watchSearchingItems, watchFetchingDetailItem } from '../sagas/items';
import ActionItems from '../actions/ActionItems';
import * as types from '../constants/ActionTypes';

// Mocks response API
const responseMockSearch = { data: {author:{name:'Matias Daniel',lastname:'Torre'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod classic','80 GB'],items:[{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'http://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-I.jpg',condition:'used',location:'Capital Federal'},{id:'MLA766877875',title:'Ipod Classic 60gb',price:{currency:'ARS',amount:1250,decimals:null},picture:'http://mla-s2-p.mlstatic.com/947045-MLA29185741092_012019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA777676864',title:'Ipod Classic 30gb',price:{currency:'ARS',amount:1000,decimals:null},picture:'http://mla-s1-p.mlstatic.com/809984-MLA29730910940_032019-I.jpg',condition:'used',location:'Buenos Aires'},{id:'MLA769088925',title:'Ipod Touch 5g 32gb',price:{currency:'ARS',amount:3200,decimals:null},picture:'http://mla-s2-p.mlstatic.com/720812-MLA25738240210_072017-I.jpg',condition:'used',location:'Buenos Aires'}]} };
const responseMockDetail = { data: {author:{name:'Matias Daniel',lastname:'Torre'},item:{id:'MLA772322281',title:'Ipod Touch 4ta Generacion 32 Gb',price:{currency:'ARS',amount:680,decimals:null},picture:'https://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-O.jpg',condition:'used',free_shipping: false,sold_quantity:0,description:'iPod Touch 4\nCapacidad 32 gB\nPantalla Retina de 3,5 pulgadas\n\nEl producto no esta funcionando\nLa pantalla se salio del chasis'},categories:['Electrónica, Audio y Video','Audio','Reproductores Portátiles','iPod','iPod touch','32 GB']} };

describe('Items Sagas', () => {

    describe('Search saga', () => {
        it('should return searchItems generator success search', () => {
            const query = 'ipod';
            const actionSearch = ActionItems.searchingItems(query);
            const generator = cloneableGenerator(searchItems)(actionSearch);
            expect(generator.next().value).toEqual(call(ItemsApi.search, query));
            expect(generator.next(responseMockSearch).value).toEqual(put(push(`/items?search=${query}`)));
            expect(generator.next().value).toEqual(put(ActionItems.searchingItemsSuccess(responseMockSearch.data)));
        });
        it('should return searchItems generator error search', async () => {
            const query = 'ipod';
            const mockException = new Error('Falied to search items');
            const actionSearch = ActionItems.searchingItems(query);
            const generator = cloneableGenerator(searchItems)(actionSearch);
            generator.next();
            expect(generator.throw(mockException).value).toEqual(put(ActionItems.searchingItemsError(mockException)));
        });
    });

    describe('Detail saga', () => {
        it('should return detailItem generator success', () => {
            const id = 'MLA772322281';
            const actionDetail = ActionItems.fecthingDetail(id);
            const generator = cloneableGenerator(fetchDetail)(actionDetail);
            expect(generator.next().value).toEqual(call(ItemsApi.getDetail, id));
            expect(generator.next(responseMockDetail).value).toEqual(put(ActionItems.fecthingDetailSuccess(responseMockDetail.data)));
        });
        it('should return detailItem generator error in detail', async () => {
            const id = 'MLA772322281';
            const mockException = new Error('Falied to fetch detail item meli');
            const actionDetail = ActionItems.fecthingDetail(id);
            const generator = cloneableGenerator(fetchDetail)(actionDetail);
            generator.next();
            expect(generator.throw(mockException).value).toEqual(put(ActionItems.fecthingDetailError(mockException)));
        });
    });

    describe('watchSearchingItems()', () => {
        const generator = watchSearchingItems()
        const expected = takeLatest(types.SEARCHING_ITEMS, searchItems)
        const actual = generator.next().value;
        it('Should fire on searchItems', () => {
          expect(actual).toEqual(expected);
        });
    });

    describe('watchFetchingDetailItem()', () => {
        const generator = watchFetchingDetailItem()
        const expected = takeLatest(types.FETCHING_DETAIL_ITEM, fetchDetail)
        const actual = generator.next().value;
        it('Should fire on fetchDetail', () => {
          expect(actual).toEqual(expected);
        });
    });

});