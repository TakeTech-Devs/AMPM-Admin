import {
    GET_ADMIN_ORDER_REQUEST,
    GET_ADMIN_ORDER_SUCCESS,
    GET_ADMIN_ORDER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/OrderConstants';
import axios from 'axios';

export const getOrder = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_ORDER_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/admin/get-allOrders`);

        dispatch({ type: GET_ADMIN_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_ORDER_FAIL, payload: error.response.data.message });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};