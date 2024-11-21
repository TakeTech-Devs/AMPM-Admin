import {
    GET_ADMIN_DISCOUNT_REQUEST,
    GET_ADMIN_DISCOUNT_SUCCESS,
    GET_ADMIN_DISCOUNT_FAIL,
    DISCOUNT_APPROVE_REQUEST,
    DISCOUNT_APPROVE_SUCCESS,
    DISCOUNT_APPROVE_FAIL,
    DISCOUNT_APPROVE_RESET,
    CREATE_COUPON_REQUEST,
    CREATE_COUPON_SUCCESS,
    CREATE_COUPON_FAIL,
    CLEAR_ERRORS,
    DISCOUNT_DELETE_REQUEST,
    DISCOUNT_DELETE_SUCCESS,
    DISCOUNT_DELETE_FAIL,
    DISCOUNT_DELETE_RESET,
} from '../Constants/discountConstants';

export const discountReducer = (state = { discountCoupon: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_DISCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_DISCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                discountCoupon: action.payload.discountCoupon,
            };
        case GET_ADMIN_DISCOUNT_FAIL:
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

export const discountApproveReducer = (state = {}, action) => {
    switch (action.type) {
        case DISCOUNT_APPROVE_REQUEST:
        case DISCOUNT_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DISCOUNT_APPROVE_SUCCESS:
        case DISCOUNT_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                isApprove: action.payload.success,
            }
        case DISCOUNT_APPROVE_FAIL:
        case DISCOUNT_DELETE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case DISCOUNT_APPROVE_RESET:
        case DISCOUNT_DELETE_RESET:
            return {
                ...state,
                isApproved: false,
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

export const createCouponReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_COUPON_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_COUPON_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case CREATE_COUPON_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}