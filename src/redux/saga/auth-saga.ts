import { takeLatest, put, call } from 'redux-saga/effects';
import { apiLogin } from '../../http';
// import { ResponseDefault } from "../../interfaces/interface-response";
import { failedLogin, setLogin } from "../slice/auth-slice";
// import { ResponseLogin } from "../../response/response-login";


function* workLogin({ payload }: any): Generator<object, any, object> {
    try {
        console.log('saga payload', payload);
        const res: any = yield call(apiLogin, payload);
        const response: any = res.data;
        console.log("Response from server is::::::", response)
        console.log("response.status == 'success'",response.success == 'success',response.success);
        if (response.status == 'success') {
            yield put(setLogin(
                response
            ));
        } else {
            yield put(failedLogin(response))
        }
    }
    catch (e) {
        console.log('saga', e)
        yield put(failedLogin(e))
        console.log('sagass', e)
    }
}


export function* watchLogin() {
    yield takeLatest('auth/getLogin', workLogin);
}