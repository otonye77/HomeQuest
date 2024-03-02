import axios from 'axios';
import baseUrl from './baseUrl';
import { registerStart, registerSuccess, registerFailure, loginStart, loginSuccess, loginFailure } from '../store/userslice';

export const RegisterUser = (userData) => async (dispatch) => {
    dispatch(registerStart())
    try {
        const response = await axios.post(`${baseUrl}/users/register`, userData);
        dispatch(registerSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(registerFailure(error.message))
    }
}

export const LoginUser = (userData) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await axios.post(`${baseUrl}/users/login`, userData);
        dispatch(loginSuccess(response.data));
        localStorage.setItem('testtoken', response.data.token);
        localStorage.setItem('testuserid', response.data.userId);
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
