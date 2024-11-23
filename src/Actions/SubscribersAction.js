import {
    GET_ADMIN_SUBSCRIBERS_REQUEST,
    GET_ADMIN_SUBSCRIBERS_SUCCESS,
    GET_ADMIN_SUBSCRIBERS_FAIL,
    CLEAR_ERRORS
} from '../Constants/SubscribersConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getSubscribers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_SUBSCRIBERS_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/get-subscribers`)
        dispatch({ type: GET_ADMIN_SUBSCRIBERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_ADMIN_SUBSCRIBERS_FAIL,
            payload: error.response?.data?.message || "Something went wrong",
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};