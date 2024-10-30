import {
    GET_ADMIN_ABOUT_REQUEST,
    GET_ADMIN_ABOUT_SUCCESS,
    GET_ADMIN_ABOUT_FAIL,
    CLEAR_ERRORS,
    ADD_ABOUTHEADER_ADMIN_REQUEST,
    ADD_ABOUTHEADER_ADMIN_SUCCESS,
    ADD_ABOUTHEADER_ADMIN_FAIL,
    ADD_ABOUTHEADER_ADMIN_RESET,
    ADD_ABOUTMISSION_ADMIN_REQUEST,
    ADD_ABOUTMISSION_ADMIN_SUCCESS,
    ADD_ABOUTMISSION_ADMIN_FAIL,
    ADD_ABOUTMISSION_ADMIN_RESET,
    ADD_ABOUTWEDO_ADMIN_REQUEST,
    ADD_ABOUTWEDO_ADMIN_SUCCESS,
    ADD_ABOUTWEDO_ADMIN_FAIL,
    ADD_ABOUTWEDO_ADMIN_RESET,
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

export const newAboutData = (state = { about: {} }, action) => {
    switch (action.type) {
        case ADD_ABOUTHEADER_ADMIN_REQUEST:
        case ADD_ABOUTMISSION_ADMIN_REQUEST:
        case ADD_ABOUTWEDO_ADMIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_ABOUTHEADER_ADMIN_SUCCESS:
        case ADD_ABOUTMISSION_ADMIN_SUCCESS:
        case ADD_ABOUTWEDO_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_ABOUTHEADER_ADMIN_FAIL:
        case ADD_ABOUTMISSION_ADMIN_FAIL:
        case ADD_ABOUTWEDO_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_ABOUTHEADER_ADMIN_RESET:
        case ADD_ABOUTMISSION_ADMIN_RESET:
        case ADD_ABOUTWEDO_ADMIN_RESET:
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