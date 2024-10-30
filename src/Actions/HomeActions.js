import {
    GET_ADMIN_HOME_REQUEST,
    GET_ADMIN_HOME_SUCCESS,
    GET_ADMIN_HOME_FAIL,
    CLEAR_ERRORS,
    ADD_HOMEHEADER_ADMIN_REQUEST,
    ADD_HOMEHEADER_ADMIN_SUCCESS,
    ADD_HOMEHEADER_ADMIN_FAIL,
    ADD_HOMEHEADERCARD_ADMIN_REQUEST,
    ADD_HOMEHEADERCARD_ADMIN_SUCCESS,
    ADD_HOMEHEADERCARD_ADMIN_FAIL,
    ADD_HOMEBATTARIE_ADMIN_REQUEST,
    ADD_HOMEBATTARIE_ADMIN_SUCCESS,
    ADD_HOMEBATTARIE_ADMIN_FAIL,
    ADD_HOMECONTACT_ADMIN_REQUEST,
    ADD_HOMECONTACT_ADMIN_SUCCESS,
    ADD_HOMECONTACT_ADMIN_FAIL,
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

export const createHomeHeader = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_HOMEHEADER_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-homeHeader`, HeaderData, config);

        dispatch({
            type: ADD_HOMEHEADER_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_HOMEHEADER_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const createHomeHeaderCard = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_HOMEHEADERCARD_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-homeHighlight`, HeaderData, config);

        dispatch({
            type: ADD_HOMEHEADERCARD_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_HOMEHEADERCARD_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const createHomeBatterie = (Data) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_HOMEBATTARIE_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-homeBatteries`, Data, config);

        dispatch({
            type: ADD_HOMEBATTARIE_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_HOMEBATTARIE_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const createHomeContact = (Data) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_HOMECONTACT_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-homeContact`, Data, config);

        dispatch({
            type: ADD_HOMECONTACT_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_HOMECONTACT_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};