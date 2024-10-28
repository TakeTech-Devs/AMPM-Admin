import {
    GET_ADMIN_HOME_REQUEST,
    GET_ADMIN_HOME_SUCCESS,
    GET_ADMIN_HOME_FAIL,
    CLEAR_ERRORS,
} from '../Constants/HomeConstants';
import axios from 'axios';

export const getHome = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_HOME_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/get-home`);

        dispatch({ type: GET_ADMIN_HOME_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: GET_ADMIN_HOME_FAIL, payload: error.response.data.message });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};