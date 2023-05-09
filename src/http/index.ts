import axios from 'axios';
import config from '../configs/config';
import { ENDPOINT_BALANCE_TRANSFER, ENDPOINT_DEPOSIT, ENDPOINT_FETCH_BALANCE, ENDPOINT_FETCH_USER_DETAILS, ENDPOINT_FETCH_USER_LIST, ENDPOINT_FORGOT_PASSWORD, ENDPOINT_GET_NAVIGATIONS, ENDPOINT_LOGIN, ENDPOINT_LOGIN_VERIFICATION, ENDPOINT_PURCHASE_ORDER, ENDPOINT_RESET_PASSWORD, ENDPOINT_WALLET_SUMMARIES } from "./end-points";

const BASE_URL: string = config.API_URL;

const token = localStorage.getItem('token');
console.log(process.env.REACT_APP_ENV);
const api = axios.create({
    baseURL: process.env.REACT_APP_ENV === 'development' ? 'https://mocki.io/v1/6960f8ab-6427-474d-9b82-1d8017993bac' : BASE_URL,
    // withCredentials: true,
    headers: {
        apikey: 'X8QLN83WaShVTTxguWkD7sQZ5yd4tT',
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
});

console.log(process.env.REACT_APP_ENV)

export const apiLogin: any = async (data: any) => await api.post(ENDPOINT_LOGIN, data);
export const apiLoginVerification: any = async (data: any) => await api.post(ENDPOINT_LOGIN_VERIFICATION, data);
export const apiForgotPassword: any = async (data: any) => await api.post(ENDPOINT_FORGOT_PASSWORD, data);
export const apiResetPassword: any = async (data: any) => await api.post(ENDPOINT_RESET_PASSWORD, data);

export const apiGetNavigations: any = async (data: any) => await api.get(ENDPOINT_GET_NAVIGATIONS);

export const apiGetWalletSummaries: any = async (data: any) => await api.post(ENDPOINT_WALLET_SUMMARIES, data);

export const apiFetchBalance: any = async (data?: any) => await api.get(ENDPOINT_FETCH_BALANCE);

export const apiDeposit: any = async (data: any) => await api.post(ENDPOINT_DEPOSIT, data);

export const apiPurchaseOrder: any = async (data: any) => await api.post(ENDPOINT_PURCHASE_ORDER, data);

export const apiFetchUserList: any = async (data: any) => await api.post(ENDPOINT_FETCH_USER_LIST, data);

export const apiFetchUserDetails: any = async (data: any) => await api.post(ENDPOINT_FETCH_USER_DETAILS, data);

export const apiBalanceTransfer: any = async (data: any) => await api.post(ENDPOINT_BALANCE_TRANSFER, data);



// export const apiGetNavigations: any = async (data: any) => await api.get('');

axios.interceptors.request.use((request: any): any => {
}, (err) => {
    console.log('error is', err);
    return Promise.reject(err);
});



export default api;


// import axios from 'axios';
// import config from '../configs/config';
// import { ENDPOINT_BALANCE_TRANSFER, ENDPOINT_DEPOSIT, ENDPOINT_FETCH_BALANCE, ENDPOINT_FETCH_USER_DETAILS, ENDPOINT_FETCH_USER_LIST, ENDPOINT_FORGOT_PASSWORD, ENDPOINT_GET_NAVIGATIONS, ENDPOINT_LOGIN, ENDPOINT_LOGIN_VERIFICATION, ENDPOINT_PURCHASE_ORDER, ENDPOINT_RESET_PASSWORD, ENDPOINT_WALLET_SUMMARIES } from "./end-points";
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';

// const BASE_URL: string = config.API_URL;

// const api = axios.create({
//     baseURL: BASE_URL,
//     // baseURL: 'https://mocki.io/v1/6960f8ab-6427-474d-9b82-1d8017993bac',
//     // withCredentials: true,
//     headers: {
//         apikey: 'X8QLN83WaShVTTxguWkD7sQZ5yd4tT',
//         'Content-Type': 'application/json'
//     }
// });


// export function useAuthToken() {
//     const token = useSelector((state: RootState) => state.auth.token);
//     return token;
// }

// api.interceptors.request.use((config) => {
//     const token = useAuthToken();
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export const apiLogin: any = async (data: any) => await api.post(ENDPOINT_LOGIN, data);
// export const apiLoginVerification: any = async (data: any) => await api.post(ENDPOINT_LOGIN_VERIFICATION, data);
// export const apiForgotPassword: any = async (data: any) => await api.post(ENDPOINT_FORGOT_PASSWORD, data);
// export const apiResetPassword: any = async (data: any) => await api.post(ENDPOINT_RESET_PASSWORD, data);

// export const apiGetNavigations: any = async (data: any) => await api.get(ENDPOINT_GET_NAVIGATIONS);

// export const apiGetWalletSummaries: any = async (data: any) => await api.post(ENDPOINT_WALLET_SUMMARIES, data);

// export const apiFetchBalance: any = async (data: any) => await api.post(ENDPOINT_FETCH_BALANCE, data);

// export const apiDeposit: any = async (data: any) => await api.post(ENDPOINT_DEPOSIT, data);

// export const apiPurchaseOrder: any = async (data: any) => await api.post(ENDPOINT_PURCHASE_ORDER, data);

// export const apiFetch: any = async (data: any) => await api.post(ENDPOINT_FETCH_USER_LIST, data);

// export const apiFetchUserDetails: any = async (data: any) => await api.post(ENDPOINT_FETCH_USER_DETAILS, data);

// export const apiBalanceTransfer: any = async (data: any) => await api.post(ENDPOINT_BALANCE_TRANSFER, data);


// export default api;