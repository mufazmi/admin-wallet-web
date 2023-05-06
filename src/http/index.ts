import axios from 'axios';
import config from '../configs/config';
import { ENDPOINT_GET_NAVIGATIONS, ENDPOINT_LOGIN, ENDPOINT_LOGIN_VERIFICATION } from "./end-points";

const BASE_URL: string = config.API_URL;

const api = axios.create({
    // baseURL: BASE_URL,
    baseURL:'https://mocki.io/v1/4f17cabb-e779-40e3-9e9a-43f68fbce876',
    // withCredentials: true,
    headers: {
        apikey: 'X8QLN83WaShVTTxguWkD7sQZ5yd4tT',
        'Content-Type': 'application/json'
    }
});

export const apiLogin: any = async (data: any) => await api.post(ENDPOINT_LOGIN, data);
export const apiLoginVerification: any = async (data: any) => await api.post(ENDPOINT_LOGIN_VERIFICATION, data);
// export const apiGetNavigations: any = async (data: any) => await api.get(ENDPOINT_GET_NAVIGATIONS);
export const apiGetNavigations: any = async (data: any) => await api.get('');

axios.interceptors.request.use((request: any): any => {
}, (err) => {
    console.log('error is', err);
    return Promise.reject(err);
});


export default api;