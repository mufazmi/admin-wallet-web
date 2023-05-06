import { takeLatest, put, call } from 'redux-saga/effects';
import { apiForgotPassword, apiLogin, apiLoginVerification, apiResetPassword } from '../../http';
// import { ResponseDefault } from "../../interfaces/interface-response";
import { failedForgotPassword, failedLogin, failedResetPassword, setForgotPassword, setLogin, setResetPassword } from "../slice/auth-slice";
// import { ResponseLogin } from "../../response/response-login";


function* workLogin({ payload }: any): Generator<object, any, object> {
    try {
        const res: any = yield call(apiLogin, payload);
        const response: any = res.data;
        if (response.status == 'success') {

            yield put(setLogin(
                response
            ));
        } else {
            yield put(failedLogin(response.response.data))
        }
    }
    catch (e: any) {
        yield put(failedLogin(e?.response?.data))
    }
}

function* workLoginVerification({ payload }: any): Generator<object, any, object> {
    try {
        const res: any = yield call(apiLoginVerification, payload)
        const response: any = res.data;
        if (response.status == 'success') {
            yield put(setLogin(
                response
            ));
        } else {
            yield put(failedLogin(response.response.data))
        }
    } catch (e: any) {
        yield put(failedLogin(e.response.data))
    }
}

function* workGetForgotPassword({ payload }: any): Generator<object, any, object> {
    try {
        const res: any = yield call(apiForgotPassword, payload)
        const response: any = res.data;
        if (response.status == 'success') {
            yield put(setForgotPassword(
                response
            ));
        } else {
            yield put(failedForgotPassword(response.response.data))
        }
    } catch (e: any) {
        yield put(failedForgotPassword(e.response.data))
    }
}

function* workGetResetPassword({ payload }: any): Generator<object, any, object> {
    try {
        const res: any = yield call(apiResetPassword, payload)
        const response: any = res.data;
        if (response.status == 'success') {
            yield put(setResetPassword(
                response
            ));
        } else {
            yield put(failedResetPassword(response.response.data))
        }
    } catch (e: any) {
        yield put(failedResetPassword(e.response.data))
    }
}


export function* watchLogin() {
    yield takeLatest('auth/getLogin', workLogin);
}

export function* watchForgot() {
    yield takeLatest('auth/getResetPassword', workGetResetPassword);
}

export function* watchReset() {
    yield takeLatest('auth/getForgotPassword', workGetForgotPassword);
}

export function* watchLoginLoginVerification() {
    yield takeLatest('auth/getLoginVerification', workLoginVerification);
}