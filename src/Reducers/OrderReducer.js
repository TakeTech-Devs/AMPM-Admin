import {
    GET_ADMIN_ORDER_REQUEST,
    GET_ADMIN_ORDER_SUCCESS,
    GET_ADMIN_ORDER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/OrderConstants';


export const ordersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload.orders,
            }
        case GET_ADMIN_ORDER_FAIL:
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