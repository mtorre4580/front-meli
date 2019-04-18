import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { items, detail } from './reducers';

/**
 * Reducer App
 */
export default combineReducers({
    items,  
    detail,
    form: formReducer,
    router: routerReducer
});



