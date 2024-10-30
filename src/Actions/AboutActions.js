import {
    GET_ADMIN_ABOUT_REQUEST,
    GET_ADMIN_ABOUT_SUCCESS,
    GET_ADMIN_ABOUT_FAIL,
    CLEAR_ERRORS,
    ADD_ABOUTHEADER_ADMIN_REQUEST,
    ADD_ABOUTHEADER_ADMIN_SUCCESS,
    ADD_ABOUTHEADER_ADMIN_FAIL,
    ADD_ABOUTMISSION_ADMIN_REQUEST,
    ADD_ABOUTMISSION_ADMIN_SUCCESS,
    ADD_ABOUTMISSION_ADMIN_FAIL,
    ADD_ABOUTWEDO_ADMIN_REQUEST,
    ADD_ABOUTWEDO_ADMIN_SUCCESS,
    ADD_ABOUTWEDO_ADMIN_FAIL,
} from '../Constants/AboutConstants';
import axios from 'axios';

export const getAbout = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_ABOUT_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/get-about`);

        dispatch({ type: GET_ADMIN_ABOUT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_ABOUT_FAIL, payload: error.response.data.message });
    }
}

export const createAboutHeader = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_ABOUTHEADER_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-aboutHeader`, HeaderData, config);

        dispatch({
            type: ADD_ABOUTHEADER_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ABOUTHEADER_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const createAboutMission = (Data) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_ABOUTMISSION_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-aboutMission`, Data, config);

        dispatch({
            type: ADD_ABOUTMISSION_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ABOUTMISSION_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const createAboutWeDo = (Data) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_ABOUTWEDO_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-aboutWeDo`, Data, config);

        dispatch({
            type: ADD_ABOUTWEDO_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ABOUTWEDO_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};