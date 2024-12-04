import {
    CREATE_TESTIMONIAL_REQUEST,
    CREATE_TESTIMONIAL_SUCCESS,
    CREATE_TESTIMONIAL_FAIL,
    CLEAR_ERRORS,
    GET_ADMIN_TESTIMONIAL_REQUEST,
    GET_ADMIN_TESTIMONIAL_SUCCESS,
    GET_ADMIN_TESTIMONIAL_FAIL
} from '../Constants/TestimonialConstants';

export const createTestimonialReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TESTIMONIAL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_TESTIMONIAL_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case CREATE_TESTIMONIAL_FAIL:
            return {
                ...state,
                loading: false,
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

export const testimonialReducer = (state = { testimonialList: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_TESTIMONIAL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_TESTIMONIAL_SUCCESS:
            return {
                ...state,
                loading: false,
                testimonialList: action.payload.testimonialList,
            };
        case GET_ADMIN_TESTIMONIAL_FAIL:
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