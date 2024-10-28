import {
    GET_ADMIN_CONSUMER_REQUEST,
    GET_ADMIN_CONSUMER_SUCCESS,
    GET_ADMIN_CONSUMER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ConsumerConstants';

export const consumerReducer = (state = { consumer: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_CONSUMER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_CONSUMER_SUCCESS:
            return {
                ...state,
                loading: false,
                consumer: action.payload.consumer,
            }
        case GET_ADMIN_CONSUMER_FAIL:
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