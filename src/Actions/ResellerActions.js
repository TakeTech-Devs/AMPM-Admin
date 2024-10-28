import {
    GET_ADMIN_RESELLER_REQUEST,
    GET_ADMIN_RESELLER_SUCCESS,
    GET_ADMIN_RESELLER_FAIL,
    CLEAR_ERRORS,
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

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};