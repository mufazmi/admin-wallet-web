import { takeLatest, put, call } from "redux-saga/effects";
import { apiGetNavigations } from "../../http";
import { setNavigations, failedNavigations } from "../slice/dashboard-slice";

function* workGetNavigations(): Generator<any, void, any> {
  console.log("workGetNavigations");
  try {
    const {status,data} = yield call(apiGetNavigations);
    console.log(data)
    yield put(status === 200 ? setNavigations(data) : failedNavigations(data));
  } catch (error: any) {
    yield put(failedNavigations(error?.response?.data));
  }
}

export function* watchGetNavigation() {
  console.log("watchGetNavigation");
  yield takeLatest("dashboard/getNavigations", workGetNavigations);
}
