import {
    GET_ADMIN_RESELLER_REQUEST,
    GET_ADMIN_RESELLER_SUCCESS,
    GET_ADMIN_RESELLER_FAIL,
    CLEAR_ERRORS,
    RESELLER_APPROVE_REQUEST,
    RESELLER_APPROVE_SUCCESS,
    RESELLER_APPROVE_FAIL,
    RESELLER_APPROVE_RESET,
} from '../Constants/ResellerConstants';

export const resellerReducer = (state = { reseller: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_RESELLER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_RESELLER_SUCCESS:
            return {
                ...state,
                loading: false,
                reseller: action.payload.reseller,
            }
        case GET_ADMIN_RESELLER_FAIL:
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


export const resellerApproveReducer = (state = {}, action) => {
    switch (action.type) {
        case RESELLER_APPROVE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case RESELLER_APPROVE_SUCCESS:
            return {
                ...state,
                loading: false,
                isApprove: action.payload.success,
            }
        case RESELLER_APPROVE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case RESELLER_APPROVE_RESET:
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