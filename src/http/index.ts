import axios from 'axios';
import config from '../configs/config';
import { ENDPOINT_LOGIN, ENDPOINT_LOGIN_VERIFICATION } from "./end-points";

const BASE_URL: string = config.API_URL;

const api = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
    headers: {
        apikey: 'X8QLN83WaShVTTxguWkD7sQZ5yd4tT',
        'Content-Type': 'application/json'
    }
});

export const apiLogin: any = async (data: any) => await api.post(ENDPOINT_LOGIN, data);
export const apiLoginVerification: any = async (data: any) => await api.post(ENDPOINT_LOGIN_VERIFICATION, data);

axios.interceptors.request.use((request: any): any => {
    console.log('request interceptor', request);
    console.log('addBrand addBrand', request.headers);
}, (err) => {
    console.log('error is', err);
    return Promise.reject(err);
});


export default api;