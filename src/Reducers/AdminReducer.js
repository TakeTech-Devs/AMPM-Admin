import {
    GET_ADMIN_ADMIN_REQUEST,
    GET_ADMIN_ADMIN_SUCCESS,
    GET_ADMIN_ADMIN_FAIL,
    CLEAR_ERRORS,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOAD_ADMIN_REQUEST,
    LOAD_ADMIN_SUCCESS,
    LOAD_ADMIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    ADD_NEW_ADMIN_REQUEST,
    ADD_NEW_ADMIN_SUCCESS,
    ADD_NEW_ADMIN_FAIL,
    ADD_NEW_ADMIN_RESET,
    ADMIN_DELETE_REQUEST,
    ADMIN_DELETE_SUCCESS,
    ADMIN_DELETE_FAIL,
    ADMIN_DELETE_RESET,
    ADMIN_UPDATE_REQUEST,
    ADMIN_UPDATE_SUCCESS,
    ADMIN_UPDATE_FAIL,
    ADMIN_UPDATE_RESET
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

export const adminLoginReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
        case LOAD_ADMIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        case LOAD_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };
        case ADMIN_LOGIN_FAIL:
            return {
                // loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case LOAD_ADMIN_FAIL:
            return {
                // ...state,
                loading: false,
                isAuthenticated: false,
                // consumer: null,
                user: null,
                error: action.payload,
            };
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
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

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_NEW_ADMIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case ADD_NEW_ADMIN_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
            }
        case ADD_NEW_ADMIN_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
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

export const deleteAdminReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_DELETE_REQUEST:
        case ADMIN_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADMIN_DELETE_SUCCESS:
        case ADMIN_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isApprove: action.payload.success,
            }
        case ADMIN_DELETE_FAIL:
        case ADMIN_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ADMIN_DELETE_RESET:
        case ADMIN_UPDATE_RESET:
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