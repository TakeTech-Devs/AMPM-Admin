import {
    GET_ADMIN_CONSUMER_REQUEST,
    GET_ADMIN_CONSUMER_SUCCESS,
    GET_ADMIN_CONSUMER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ConsumerConstants';

export const consumerReducer = (state = { consumers: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_CONSUMER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_CONSUMER_SUCCESS:
            console.log("Action Payload:", action.payload); // Debug the entire payload
            console.log("Consumers:", action.payload.consumers); // Log the key in the payload
            return {
                ...state,
                loading: false,
                consumers: action.payload.consumers || [], // Use "consumers" from the API response
            };
        case GET_ADMIN_CONSUMER_FAIL:
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
};