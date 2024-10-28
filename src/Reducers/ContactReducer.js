import {
    GET_ADMIN_CONTACT_REQUEST,
    GET_ADMIN_CONTACT_SUCCESS,
    GET_ADMIN_CONTACT_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ContactConstants';

export const contactReducer = (state = { contactInfo: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                contactInfo: action.payload.contactInfo[0],
            }
        case GET_ADMIN_CONTACT_FAIL:
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