import {
    GET_ADMIN_DISCOUNT_REQUEST,
    GET_ADMIN_DISCOUNT_SUCCESS,
    GET_ADMIN_DISCOUNT_FAIL,
    DISCOUNT_APPROVE_REQUEST,
    DISCOUNT_APPROVE_SUCCESS,
    DISCOUNT_APPROVE_FAIL,
    CREATE_COUPON_REQUEST,
    CREATE_COUPON_SUCCESS,
    CREATE_COUPON_FAIL,
    CLEAR_ERRORS,
    DISCOUNT_DELETE_REQUEST,
    DISCOUNT_DELETE_SUCCESS,
    DISCOUNT_DELETE_FAIL,
} from '../Constants/discountConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getDiscounts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_DISCOUNT_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/get-coupons`)
        dispatch({ type: GET_ADMIN_DISCOUNT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_ADMIN_DISCOUNT_FAIL,
            payload: error.response?.data?.message || "Something went wrong",
        });
    }
};

export const approveCoupon = (id) => async (dispatch) => {
    try {
        dispatch({ type: DISCOUNT_APPROVE_REQUEST });

        const { data } = await axios.put(`${baseUrl}/api/v1/admin/coupon/availability/${id}`, { withCredentials: true });

        dispatch({
            type: DISCOUNT_APPROVE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: DISCOUNT_APPROVE_FAIL,
            payload: error.response?.data?.message,
        })
    }
}


export const createCoupon = (formData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_COUPON_REQUEST });

        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        };

        const { data } = await axios.post(`${baseUrl}/api/v1/admin/create-coupon`, formData, config);

        dispatch({
            type: CREATE_COUPON_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: CREATE_COUPON_FAIL,
            payload: error.response?.data?.message,
        })
    }
}

export const deleteCoupon = (id) => async (dispatch) => {
    try {
        dispatch({ type: DISCOUNT_DELETE_REQUEST });

        const { data } = await axios.delete(`${baseUrl}/api/v1/admin/coupon/${id}`, { withCredentials: true });

        dispatch({
            type: DISCOUNT_DELETE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: DISCOUNT_DELETE_FAIL,
            payload: error.response?.data?.message,
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};