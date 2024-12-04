import {
    GET_ADMIN_SUBSCRIBERS_REQUEST,
    GET_ADMIN_SUBSCRIBERS_SUCCESS,
    GET_ADMIN_SUBSCRIBERS_FAIL,
    CLEAR_ERRORS
} from '../Constants/SubscribersConstants';


export const subscribersReducer = (state = { subscribers: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_SUBSCRIBERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_SUBSCRIBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                subscribers: action.payload.subscribers,
            }
        case GET_ADMIN_SUBSCRIBERS_FAIL:
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