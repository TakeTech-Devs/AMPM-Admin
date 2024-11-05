import {
    GET_ADMIN_ORDER_REQUEST,
    GET_ADMIN_ORDER_SUCCESS,
    GET_ADMIN_ORDER_FAIL,
    CLEAR_ERRORS,
    UPDATE_ADMIN_ORDER_REQUEST,
    UPDATE_ADMIN_ORDER_SUCCESS,
    UPDATE_ADMIN_ORDER_FAIL,
} from '../Constants/OrderConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getOrder = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_ORDER_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/get-allOrders`);

        dispatch({ type: GET_ADMIN_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_ORDER_FAIL, payload: error.response.data.message });
    }
}


export const updateOrder = (id, order) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ADMIN_ORDER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            }, withCredentials: true
        };
        const { data } = await axios.put(
            `${baseUrl}/api/v1/admin/admin/order/${id}`,
            order,
            config
        );

        dispatch({ type: UPDATE_ADMIN_ORDER_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: UPDATE_ADMIN_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};