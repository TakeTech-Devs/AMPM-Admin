import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { homeReducer, newHomeData } from './Reducers/HomeReducer';
import { aboutReducer, newAboutData } from './Reducers/AboutReducer';
import { contactReducer, newContactData } from './Reducers/ContactReducer';
import { consumerReducer } from './Reducers/ConsumerReducer';
import { resellerApproveReducer, resellerReducer } from './Reducers/ResellerReducer';
import { adminLoginReducer, adminReducer, authReducer } from './Reducers/AdminReducer';
import { orderReducer, ordersReducer } from './Reducers/OrderReducer';

const reducer = combineReducers({
    adminHome: homeReducer,
    adminAbout: aboutReducer,
    adminContact: contactReducer,
    adminConsumer: consumerReducer,
    adminReseller: resellerReducer,
    adminList: adminReducer,
    adminOrders: ordersReducer,
    adminLogin: adminLoginReducer,
    newContactData: newContactData,
    newHomeData: newHomeData,
    newAboutData: newAboutData,
    authReducer: authReducer,
    resellerApprove: resellerApproveReducer,
    order: orderReducer,
    
})

let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;