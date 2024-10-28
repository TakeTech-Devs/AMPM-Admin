import {
    GET_ADMIN_RESELLER_REQUEST,
    GET_ADMIN_RESELLER_SUCCESS,
    GET_ADMIN_RESELLER_FAIL,
    CLEAR_ERRORS,
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