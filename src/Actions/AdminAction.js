import {
    GET_ADMIN_ADMIN_REQUEST,
    GET_ADMIN_ADMIN_SUCCESS,
    GET_ADMIN_ADMIN_FAIL,
    CLEAR_ERRORS
} from '../Constants/AdminConstants';
import axios from 'axios';

export const getAdmin = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_ADMIN_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/admin/admins`);

        dispatch({ type: GET_ADMIN_ADMIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_ADMIN_FAIL, payload: error.response.data.message });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};