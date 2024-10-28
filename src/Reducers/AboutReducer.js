import {
    GET_ADMIN_ABOUT_REQUEST,
    GET_ADMIN_ABOUT_SUCCESS,
    GET_ADMIN_ABOUT_FAIL,
    CLEAR_ERRORS,
} from '../Constants/AboutConstants';

export const aboutReducer = (state = { about: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_ABOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_ABOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                about: action.payload.about[0],
            }
        case GET_ADMIN_ABOUT_FAIL:
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