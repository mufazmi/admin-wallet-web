import axios from 'axios';
import config from '../configs/config';
import { ENDPOINT_FORGOT_PASSWORD, ENDPOINT_GET_NAVIGATIONS, ENDPOINT_LOGIN, ENDPOINT_LOGIN_VERIFICATION, ENDPOINT_RESET_PASSWORD } from "./end-points";

const BASE_URL: string = config.API_URL;


const token = localStorage.getItem('token');
const api = axios.create({
    baseURL: BASE_URL,
    // baseURL: 'https://mocki.io/v1/4f17cabb-e779-40e3-9e9a-43f68fbce876',
    // withCredentials: true,
    headers: {
        apikey: 'X8QLN83WaShVTTxguWkD7sQZ5yd4tT',
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
});

export const apiLogin: any = async (data: any) => await api.post(ENDPOINT_LOGIN, data);
export const apiLoginVerification: any = async (data: any) => await api.post(ENDPOINT_LOGIN_VERIFICATION, data);

export const apiForgotPassword: any = async (data: any) => await api.post(ENDPOINT_FORGOT_PASSWORD, data);
export const apiResetPassword: any = async (data: any) => await api.post(ENDPOINT_RESET_PASSWORD, data);

export const apiGetNavigations: any = async (data: any) => await api.get(ENDPOINT_GET_NAVIGATIONS);
// export const apiGetNavigations: any = async (data: any) => await api.get('');

axios.interceptors.request.use((request: any): any => {
}, (err) => {
    console.log('error is', err);
    return Promise.reject(err);
});



export default api;