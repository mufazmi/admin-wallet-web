import { takeLatest, put, call } from "redux-saga/effects";
import { apiFetchUserDetails, apiFetchUserList, apiGetNavigations } from "../../http";
import { failedUserList, setUserList, getUserList, getUserDetails, setUserDetails, failedUserDetails } from "../slice/user-slice";

function* workGetUserList({ payload }: any): Generator<any, void, any> {
  try {
    const { status, data } = yield call(apiFetchUserList, payload);
    yield put(status === 200 ? setUserList(data) : failedUserList(data));
  } catch (error: any) {
    yield put(failedUserList(error?.response?.data));
  }
}

function* workGetUserDetails({ payload }: any): Generator<any, void, any> {
  try {
    const { status, data } = yield call(apiFetchUserDetails, payload);
    yield put(status === 200 ? setUserDetails(data) : failedUserDetails(data));
  } catch (error: any) {
    yield put(failedUserDetails(error?.response?.data));
  }
}


export function* watchGetUserDetails() {
  yield takeLatest("user/getUserDetails", workGetUserDetails);
}


export function* watchGetUserList() {
  yield takeLatest("user/getUserList", workGetUserList);
}
