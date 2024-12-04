import {
    GET_ADMIN_CONTACT_REQUEST,
    GET_ADMIN_CONTACT_SUCCESS,
    GET_ADMIN_CONTACT_FAIL,
    CLEAR_ERRORS,
    ADD_CONTACT_ADMIN_REQUEST,
    ADD_CONTACT_ADMIN_SUCCESS,
    ADD_CONTACT_ADMIN_FAIL,
    ADD_CONTACT_ADMIN_RESET,
    GET_CONTACT_QUERIES_REQUEST,
    GET_CONTACT_QUERIES_SUCCESS,
    GET_CONTACT_QUERIES_FAIL,
    QUERIES_RESOLVED_REQUEST,
    QUERIES_RESOLVED_SUCCESS,
    QUERIES_RESOLVED_FAIL,
    QUERIES_RESOLVED_RESET,
} from '../Constants/ContactConstants';

export const contactReducer = (state = { contactInfo: [], contactUsData:[] }, action) => {
    switch (action.type) {
        case GET_ADMIN_CONTACT_REQUEST:
        case GET_CONTACT_QUERIES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_CONTACT_SUCCESS:
        case GET_CONTACT_QUERIES_SUCCESS:
            return {
                ...state,
                loading: false,
                contactInfo: action.payload.contactInfo,
                contactUsData: action.payload.contactUsData,
            }
        case GET_ADMIN_CONTACT_FAIL:
        case GET_CONTACT_QUERIES_FAIL:
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

export const newContactData = (state = { contact: {} }, action) => {
    switch (action.type) {
        case ADD_CONTACT_ADMIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_CONTACT_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_CONTACT_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_CONTACT_ADMIN_RESET:
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

export const queriseResolveReducer = (state = {}, action) => {
    switch (action.type) {
        case QUERIES_RESOLVED_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case QUERIES_RESOLVED_SUCCESS:
            return {
                ...state,
                loading: false,
                isApprove: action.payload.success,
            }
        case QUERIES_RESOLVED_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case QUERIES_RESOLVED_RESET:
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