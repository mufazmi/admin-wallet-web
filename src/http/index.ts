import axios from 'axios';
import config from '../configs/config';
import { ENDPOINT_BALANCE_TRANSFER, ENDPOINT_DEPOSIT, ENDPOINT_FETCH_BALANCE, ENDPOINT_FETCH_USER_DETAILS, ENDPOINT_FETCH_USER_LIST, ENDPOINT_FORGOT_PASSWORD, ENDPOINT_GET_NAVIGATIONS, ENDPOINT_LOGIN, ENDPOINT_LOGIN_VERIFICATION, ENDPOINT_PURCHASE_ORDER, ENDPOINT_RESET_PASSWORD, ENDPOINT_WALLET_SUMMARIES } from "./end-points";

const BASE_URL: string = config.API_URL;

const token = localStorage.getItem('token');
const api = axios.create({
    baseURL: BASE_URL,
    // baseURL: 'https://mocki.io/v1/6960f8ab-6427-474d-9b82-1d8017993bac',
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

export const apiGetWalletSummaries: any = async (data: any) => await api.get(ENDPOINT_WALLET_SUMMARIES);

export const apiFetchBalance: any = async (data: any) => await api.get(ENDPOINT_FETCH_BALANCE);

export const apiDeposit: any = async (data: any) => await api.get(ENDPOINT_DEPOSIT);

export const apiPurchaseOrder: any = async (data: any) => await api.get(ENDPOINT_PURCHASE_ORDER);

export const apiFetch: any = async (data: any) => await api.get(ENDPOINT_FETCH_USER_LIST);

export const apiFetchUserDetails: any = async (data: any) => await api.get(ENDPOINT_FETCH_USER_DETAILS);

export const apiBalanceTransfer: any = async (data: any) => await api.get(ENDPOINT_BALANCE_TRANSFER);



// export const apiGetNavigations: any = async (data: any) => await api.get('');

axios.interceptors.request.use((request: any): any => {
}, (err) => {
    console.log('error is', err);
    return Promise.reject(err);
});



export default api;