import {
    GET_ADMIN_RESELLER_REQUEST,
    GET_ADMIN_RESELLER_SUCCESS,
    GET_ADMIN_RESELLER_FAIL,
    CLEAR_ERRORS,
    RESELLER_APPROVE_REQUEST,
    RESELLER_APPROVE_SUCCESS,
    RESELLER_APPROVE_FAIL,
} from '../Constants/ResellerConstants';
import axios from 'axios';


export const getReseller = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_RESELLER_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/admin/resellers`);

        dispatch({ type: GET_ADMIN_RESELLER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_RESELLER_FAIL, payload: error.response.data.message });
    }
}

export const approveReseller = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESELLER_APPROVE_REQUEST });

        const { data } = await axios.put(`http://localhost:5000/api/v1/admin/reseller/approve/${id}`, { withCredentials: true });

        dispatch({
            type: RESELLER_APPROVE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: RESELLER_APPROVE_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};