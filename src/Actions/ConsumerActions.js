import {
    GET_ADMIN_CONSUMER_REQUEST,
    GET_ADMIN_CONSUMER_SUCCESS,
    GET_ADMIN_CONSUMER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ConsumerConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getConsumers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_CONSUMER_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/consumer`);

        dispatch({ type: GET_ADMIN_CONSUMER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_CONSUMER_FAIL, payload: error.response.data.message });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};