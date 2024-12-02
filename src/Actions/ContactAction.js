import {
    GET_ADMIN_CONTACT_REQUEST,
    GET_ADMIN_CONTACT_SUCCESS,
    GET_ADMIN_CONTACT_FAIL,
    CLEAR_ERRORS,
    ADD_CONTACT_ADMIN_REQUEST,
    ADD_CONTACT_ADMIN_SUCCESS,
    ADD_CONTACT_ADMIN_FAIL,
    GET_CONTACT_QUERIES_REQUEST,
    GET_CONTACT_QUERIES_SUCCESS,
    GET_CONTACT_QUERIES_FAIL,
} from '../Constants/ContactConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getContact = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_CONTACT_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/get-contactInfo`);

        dispatch({ type: GET_ADMIN_CONTACT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_CONTACT_FAIL, payload: error.response?.data?.message });   
    }
}

export const createContact = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_CONTACT_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/admin/create-contactInfo`, HeaderData, config);

        dispatch({
            type: ADD_CONTACT_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_CONTACT_ADMIN_FAIL,
            payload: error.response?.data?.message,
        });
    }
}

export const getContactQueries = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CONTACT_QUERIES_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/get-contactUs`);

        dispatch({ type: GET_CONTACT_QUERIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CONTACT_QUERIES_FAIL, payload: error.response?.data?.message });   
        console.log("PRoblem", error)
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};