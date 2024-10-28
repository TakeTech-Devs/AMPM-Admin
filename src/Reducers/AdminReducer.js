import {
    GET_ADMIN_ADMIN_REQUEST,
    GET_ADMIN_ADMIN_SUCCESS,
    GET_ADMIN_ADMIN_FAIL,
    CLEAR_ERRORS
} from '../Constants/AdminConstants';


export const adminReducer = (state = { admin: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_ADMIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                admin: action.payload.admin,
            }
        case GET_ADMIN_ADMIN_FAIL:
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