import {
    GET_ADMIN_CONTACT_REQUEST,
    GET_ADMIN_CONTACT_SUCCESS,
    GET_ADMIN_CONTACT_FAIL,
    CLEAR_ERRORS,
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

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};