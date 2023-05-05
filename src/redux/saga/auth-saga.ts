import { takeLatest, put, call } from 'redux-saga/effects';
import { apiLogin, apiLoginVerification } from '../../http';
// import { ResponseDefault } from "../../interfaces/interface-response";
import { failedLogin, setLogin } from "../slice/auth-slice";
// import { ResponseLogin } from "../../response/response-login";


function* workLogin({ payload }: any): Generator<object, any, object> {
    try {
        console.log('saga payload', payload);
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
    catch (e:any) {
        yield put(failedLogin(e?.response?.data))
    }
}

function* workLoginVerification({payload}:any) : Generator<object,any,object>{
    try{
        const res : any = yield call(apiLoginVerification,payload)
        const response : any = res.data;
        if (response.status == 'success') {
            yield put(setLogin(
                response
            ));
        } else {
            yield put(failedLogin(response.response.data))
        }
    }catch(e:any){
        yield put(failedLogin(e.response.data))
    }
}


export function* watchLogin() {
    yield takeLatest('auth/getLogin', workLogin);
}

export function* watchLoginLoginVerification() {
    yield takeLatest('auth/getLoginVerification', workLoginVerification);
}