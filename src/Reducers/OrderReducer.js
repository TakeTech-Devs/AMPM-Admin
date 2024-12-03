import {
    GET_ADMIN_ORDER_REQUEST,
    GET_ADMIN_ORDER_SUCCESS,
    GET_ADMIN_ORDER_FAIL,
    CLEAR_ERRORS,
    UPDATE_ADMIN_ORDER_REQUEST,
    UPDATE_ADMIN_ORDER_SUCCESS,
    UPDATE_ADMIN_ORDER_FAIL,
    UPDATE_ADMIN_ORDER_RESET,
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

export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ADMIN_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_ADMIN_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };

        case UPDATE_ADMIN_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_ADMIN_ORDER_RESET:
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
};

