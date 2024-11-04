import {
    GET_ADMIN_PRODUCT_REQUEST,
    GET_ADMIN_PRODUCT_SUCCESS,
    GET_ADMIN_PRODUCT_FAIL,
    CLEAR_ERRORS,
    ADD_PRODUCTHEADER_ADMIN_REQUEST,
    ADD_PRODUCTHEADER_ADMIN_SUCCESS,
    ADD_PRODUCTHEADER_ADMIN_FAIL,
    ADD_PRODUCTHEADER_ADMIN_RESET,
    ADD_BATTERY_ADMIN_REQUEST,
    ADD_BATTERY_ADMIN_SUCCESS,
    ADD_BATTERY_ADMIN_FAIL,
    ADD_BATTERY_ADMIN_RESET,
    ADD_BATTERYCARD_ADMIN_REQUEST,
    ADD_BATTERYCARD_ADMIN_SUCCESS,
    ADD_BATTERYCARD_ADMIN_FAIL,
    ADD_BATTERYCARD_ADMIN_RESET,
    ADD_FEATUREBATTERY_ADMIN_REQUEST,
    ADD_FEATUREBATTERY_ADMIN_SUCCESS,
    ADD_FEATUREBATTERY_ADMIN_FAIL,
    ADD_FEATUREBATTERY_ADMIN_RESET,
    DELETE_FEATUREBATTERYPOINT_REQUEST,
    DELETE_FEATUREBATTERYPOINT_SUCCESS,
    DELETE_FEATUREBATTERYPOINT_FAIL,
    DELETE_FEATUREBATTERYPOINT_RESET,
} from '../Constants/ProductConstants';

export const productDataReducer = (state = { productData: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productData: Array.isArray(action.payload.productData) ? action.payload.productData : [action.payload.productData],
            }
        case GET_ADMIN_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const newProductData = (state = { product: {} }, action) => {
    switch (action.type) {
        case ADD_PRODUCTHEADER_ADMIN_REQUEST:
        case ADD_BATTERY_ADMIN_REQUEST:
        case ADD_BATTERYCARD_ADMIN_REQUEST:
        case ADD_FEATUREBATTERY_ADMIN_REQUEST:
        case DELETE_FEATUREBATTERYPOINT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_PRODUCTHEADER_ADMIN_SUCCESS:
        case ADD_BATTERY_ADMIN_SUCCESS:
        case ADD_BATTERYCARD_ADMIN_SUCCESS:
        case ADD_FEATUREBATTERY_ADMIN_SUCCESS:
        case DELETE_FEATUREBATTERYPOINT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_PRODUCTHEADER_ADMIN_FAIL:
        case ADD_BATTERY_ADMIN_FAIL:
        case ADD_BATTERYCARD_ADMIN_FAIL:
        case ADD_FEATUREBATTERY_ADMIN_FAIL:
        case DELETE_FEATUREBATTERYPOINT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_PRODUCTHEADER_ADMIN_RESET:
        case ADD_BATTERY_ADMIN_RESET:
        case ADD_BATTERYCARD_ADMIN_RESET:
        case ADD_FEATUREBATTERY_ADMIN_RESET:
        case DELETE_FEATUREBATTERYPOINT_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
}