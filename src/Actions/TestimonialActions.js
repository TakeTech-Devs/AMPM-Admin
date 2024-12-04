import {
    CREATE_TESTIMONIAL_REQUEST,
    CREATE_TESTIMONIAL_SUCCESS,
    CREATE_TESTIMONIAL_FAIL,
    CLEAR_ERRORS,
    GET_ADMIN_TESTIMONIAL_REQUEST,
    GET_ADMIN_TESTIMONIAL_SUCCESS,
    GET_ADMIN_TESTIMONIAL_FAIL
} from '../Constants/TestimonialConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const createTestimonial = (formData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_TESTIMONIAL_REQUEST });

        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        };

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-testimonial`, formData, config);

        dispatch({
            type: CREATE_TESTIMONIAL_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: CREATE_TESTIMONIAL_FAIL,
            payload: error.response?.data?.message,
        })
    }
}

export const getTestimonial = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_TESTIMONIAL_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/get-testimonial`)
        dispatch({ type: GET_ADMIN_TESTIMONIAL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_ADMIN_TESTIMONIAL_FAIL,
            payload: error.response?.data?.message || "Something went wrong",
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};