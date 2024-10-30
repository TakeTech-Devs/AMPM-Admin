import {
    GET_ADMIN_HOME_REQUEST,
    GET_ADMIN_HOME_SUCCESS,
    GET_ADMIN_HOME_FAIL,
    CLEAR_ERRORS,
    ADD_HOMEHEADER_ADMIN_REQUEST,
    ADD_HOMEHEADER_ADMIN_SUCCESS,
    ADD_HOMEHEADER_ADMIN_FAIL,
    ADD_HOMEHEADER_ADMIN_RESET,
    ADD_HOMEHEADERCARD_ADMIN_REQUEST,
    ADD_HOMEHEADERCARD_ADMIN_SUCCESS,
    ADD_HOMEHEADERCARD_ADMIN_FAIL,
    ADD_HOMEHEADERCARD_ADMIN_RESET,
    ADD_HOMEBATTARIE_ADMIN_REQUEST,
    ADD_HOMEBATTARIE_ADMIN_SUCCESS,
    ADD_HOMEBATTARIE_ADMIN_FAIL,
    ADD_HOMEBATTARIE_ADMIN_RESET,
    ADD_HOMECONTACT_ADMIN_REQUEST,
    ADD_HOMECONTACT_ADMIN_SUCCESS,
    ADD_HOMECONTACT_ADMIN_FAIL,
    ADD_HOMECONTACT_ADMIN_RESET,
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

export const newHomeData = (state = { home: {} }, action) => {
    switch (action.type) {
        case ADD_HOMEHEADER_ADMIN_REQUEST:
        case ADD_HOMEHEADERCARD_ADMIN_REQUEST:
        case ADD_HOMEBATTARIE_ADMIN_REQUEST:
        case ADD_HOMECONTACT_ADMIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_HOMEHEADER_ADMIN_SUCCESS:
        case ADD_HOMEHEADERCARD_ADMIN_SUCCESS:
        case ADD_HOMEBATTARIE_ADMIN_SUCCESS:
        case ADD_HOMECONTACT_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_HOMEHEADER_ADMIN_FAIL:
        case ADD_HOMEHEADERCARD_ADMIN_FAIL:
        case ADD_HOMEBATTARIE_ADMIN_FAIL:
        case ADD_HOMECONTACT_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_HOMEHEADER_ADMIN_RESET:
        case ADD_HOMEHEADERCARD_ADMIN_RESET:
        case ADD_HOMEBATTARIE_ADMIN_RESET:
        case ADD_HOMECONTACT_ADMIN_RESET:
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