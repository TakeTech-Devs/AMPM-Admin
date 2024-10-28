import {
    GET_ADMIN_HOME_REQUEST,
    GET_ADMIN_HOME_SUCCESS,
    GET_ADMIN_HOME_FAIL,
    CLEAR_ERRORS,
} from '../Constants/HomeConstants';

export const homeReducer = (state = { home: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_HOME_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                home: action.payload.home[0],
            }
        case GET_ADMIN_HOME_FAIL:
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