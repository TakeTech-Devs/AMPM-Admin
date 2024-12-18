import {
    GET_ADMIN_ADMIN_REQUEST,
    GET_ADMIN_ADMIN_SUCCESS,
    GET_ADMIN_ADMIN_FAIL,
    CLEAR_ERRORS,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOAD_ADMIN_REQUEST,
    LOAD_ADMIN_SUCCESS,
    LOAD_ADMIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    ADD_NEW_ADMIN_REQUEST,
    ADD_NEW_ADMIN_SUCCESS,
    ADD_NEW_ADMIN_FAIL,
    ADMIN_DELETE_REQUEST,
    ADMIN_DELETE_SUCCESS,
    ADMIN_DELETE_FAIL,
    ADMIN_UPDATE_REQUEST,
    ADMIN_UPDATE_SUCCESS,
    ADMIN_UPDATE_FAIL,
} from '../Constants/AdminConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getAdmin = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_ADMIN_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/admins`);

        dispatch({ type: GET_ADMIN_ADMIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_ADMIN_FAIL, payload: error.response?.data?.message });
    }
}

export const adminLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const { data } = await axios.post(`${baseUrl}/api/v1/admin/admin-login`, { email, password }, config);

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.response?.data?.message });
    }
}

export const loadAdmin = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_ADMIN_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/admin/profile`, { withCredentials: true });

        dispatch({ type: LOAD_ADMIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_ADMIN_FAIL, payload: error.response?.data?.message });
    }
}

export const logout = () => async (dispatch) => {
    try {
        await axios.get(`${baseUrl}/api/v1/admin/logout`,{withCredentials:true});
        dispatch({ type: LOGOUT_SUCCESS });
        console.log("hi")
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response?.data?.message });
    }
};

export const addAdmin = (Data) => async (dispatch) => {
    dispatch({ type: ADD_NEW_ADMIN_REQUEST });

    const config = {
        headers: { "Content-Type": "application/json" }, withCredentials: true
    }

    try {
        const response = await axios.post(`${baseUrl}/api/v1/admin/admin-register`,  Data , config);

        dispatch({ type: ADD_NEW_ADMIN_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ADD_NEW_ADMIN_FAIL, error: error.response?.data?.msg || error.message });
    }
};

export const deleteAdmin = (id) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_DELETE_REQUEST });

        const { data } = await axios.delete(`${baseUrl}/api/v1/admin/admin/${id}`, { withCredentials: true });

        dispatch({
            type: ADMIN_DELETE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: ADMIN_DELETE_FAIL,
            payload: error.response?.data?.message,
        })
    }
}


// Update Admin 

export const updateAdmin = (id, adminData) => async (dispatch) =>{
    try {
        dispatch({ type: ADMIN_UPDATE_REQUEST })


        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const { data } = await axios.put(`${baseUrl}/api/v1/admin/update/${id}`, adminData, config)

        dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data.success });


    } catch (error) {
        dispatch({
      type: ADMIN_UPDATE_FAIL,
      payload: error.response?.data?.message,
    });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};