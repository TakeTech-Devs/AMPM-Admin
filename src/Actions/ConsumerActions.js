import {
    GET_ADMIN_CONSUMER_REQUEST,
    GET_ADMIN_CONSUMER_SUCCESS,
    GET_ADMIN_CONSUMER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ConsumerConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getConsumers = (duration = "") => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_CONSUMER_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/consumer`, {
            params: { duration },
        });

        console.log("API Response:", data); // Debug the API response structure
        dispatch({ type: GET_ADMIN_CONSUMER_SUCCESS, payload: data }); // Pass the entire response
    } catch (error) {
        console.error("Error fetching consumers:", error); // Log error details
        dispatch({
            type: GET_ADMIN_CONSUMER_FAIL,
            payload: error.response?.data?.message || "Something went wrong",
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};