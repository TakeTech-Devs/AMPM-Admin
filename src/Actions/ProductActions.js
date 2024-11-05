import {
    GET_ADMIN_PRODUCT_REQUEST,
    GET_ADMIN_PRODUCT_SUCCESS,
    GET_ADMIN_PRODUCT_FAIL,
    CLEAR_ERRORS,
    ADD_PRODUCTHEADER_ADMIN_REQUEST,
    ADD_PRODUCTHEADER_ADMIN_SUCCESS,
    ADD_PRODUCTHEADER_ADMIN_FAIL,
    ADD_BATTERY_ADMIN_REQUEST,
    ADD_BATTERY_ADMIN_SUCCESS,
    ADD_BATTERY_ADMIN_FAIL,
    ADD_BATTERYCARD_ADMIN_REQUEST,
    ADD_BATTERYCARD_ADMIN_SUCCESS,
    ADD_BATTERYCARD_ADMIN_FAIL,
    ADD_FEATUREBATTERY_ADMIN_REQUEST,
    ADD_FEATUREBATTERY_ADMIN_SUCCESS,
    ADD_FEATUREBATTERY_ADMIN_FAIL,
    DELETE_FEATUREBATTERYPOINT_REQUEST,
    DELETE_FEATUREBATTERYPOINT_SUCCESS,
    DELETE_FEATUREBATTERYPOINT_FAIL,
} from '../Constants/ProductConstants';
import axios from 'axios';
import baseUrl from '../helper';


export const getProdcutData = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_PRODUCT_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/get-productData`);

        dispatch({ type: GET_ADMIN_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_PRODUCT_FAIL, payload: error.response.data.message });
    }
}

export const createProductHeader = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_PRODUCTHEADER_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/admin/create-productHeader`, HeaderData, config);

        dispatch({
            type: ADD_PRODUCTHEADER_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_PRODUCTHEADER_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}


export const createProductBattery = (Data) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_BATTERY_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/admin/create-battery`, Data, config);

        dispatch({
            type: ADD_BATTERY_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_BATTERY_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}


export const createProductBatteryCard = (Data) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_BATTERYCARD_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/admin/create-batteryCard`, Data, config);

        dispatch({
            type: ADD_BATTERYCARD_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_BATTERYCARD_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const createProductFeatureBattery = (Data) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_FEATUREBATTERY_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/admin/create-featureProduct`, Data, config);

        dispatch({
            type: ADD_FEATUREBATTERY_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_FEATUREBATTERY_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const deleteFeatureProductPoint = (id, pointToRemove) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_FEATUREBATTERYPOINT_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
            data: { pointToRemove }, 
        };

        const { data } = await axios.request({
            method: "DELETE",
            url: `${baseUrl}/api/v1/admin/product/feature-point/${id}`,
            ...config,
        });

        dispatch({
            type: DELETE_FEATUREBATTERYPOINT_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: DELETE_FEATUREBATTERYPOINT_FAIL,
            payload: error.response?.data.message,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};