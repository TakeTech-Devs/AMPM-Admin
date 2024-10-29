import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { homeReducer } from './Reducers/HomeReducer';
import { aboutReducer } from './Reducers/AboutReducer';
import { contactReducer } from './Reducers/ContactReducer';
import { consumerReducer } from './Reducers/ConsumerReducer';
import { resellerReducer } from './Reducers/ResellerReducer';
import { adminLoginReducer, adminReducer } from './Reducers/AdminReducer';
import { ordersReducer } from './Reducers/OrderReducer';

const reducer = combineReducers({
    adminHome: homeReducer,
    adminAbout: aboutReducer,
    adminContact: contactReducer,
    adminConsumer: consumerReducer,
    adminReseller: resellerReducer,
    adminList: adminReducer,
    adminOrders: ordersReducer,
    adminLogin: adminLoginReducer,
    
})

let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;