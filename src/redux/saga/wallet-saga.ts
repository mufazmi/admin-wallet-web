import { takeLatest, put, call } from "redux-saga/effects";
import { apiGetWalletSummaries } from "../../http";
import { setWalletSummaries, failedWalletSummaries } from "../slice/wallet-slice";

function* workGetWalletSummaries(): Generator<any, void, any> {
  try {
    const {status,data} = yield call(apiGetWalletSummaries);
    yield put(status === 200 ? setWalletSummaries(data) : failedWalletSummaries(data));
  } catch (error: any) {
    yield put(failedWalletSummaries(error?.response?.data));
  }
}

export function* watchGetWalletSummaries() {
  yield takeLatest("wallet/getWalletSummaries", workGetWalletSummaries);
}
