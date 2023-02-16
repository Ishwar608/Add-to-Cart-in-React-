import {createStore,combineReducers} from 'redux';
import { AddToCart } from '../action/productAction';
import addtocartReducer from '../reducer/addtocartReducer';
import productReducer from '../reducer/productReducer';

const rootReducer =  combineReducers({
    productData : productReducer,
    addToData : addtocartReducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;