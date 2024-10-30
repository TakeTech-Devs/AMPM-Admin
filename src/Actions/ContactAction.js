import {
    GET_ADMIN_CONTACT_REQUEST,
    GET_ADMIN_CONTACT_SUCCESS,
    GET_ADMIN_CONTACT_FAIL,
    CLEAR_ERRORS,
    ADD_CONTACT_ADMIN_REQUEST,
    ADD_CONTACT_ADMIN_SUCCESS,
    ADD_CONTACT_ADMIN_FAIL,
} from '../Constants/ContactConstants';
import axios from 'axios';

export const getContact = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_CONTACT_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/get-contactInfo`);

        dispatch({ type: GET_ADMIN_CONTACT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_CONTACT_FAIL, payload: error.response.data.message });   
    }
}

export const createContact = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_CONTACT_ADMIN_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" }, withCredentials: true
        }

        const { data } = await axios.post(`http://localhost:5000/api/v1/admin/create-contactInfo`, HeaderData, config);

        dispatch({
            type: ADD_CONTACT_ADMIN_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_CONTACT_ADMIN_FAIL,
            payload: error.response?.data.message,
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};