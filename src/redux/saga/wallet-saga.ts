import { takeLatest, put, call } from "redux-saga/effects";
import { apiBalanceTransfer, apiDeposit, apiFetchBalance, apiGetWalletSummaries, apiPurchaseOrder } from "../../http";
import { setWalletSummaries, failedWalletSummaries, failedFetchBalance, failedDeposit, failedBalanceTransfer, failedPurchaseOrder, setDeposit, setBalanceTransfer, setPurchaseOrder, setFetchBalance } from "../slice/wallet-slice";

function* workGetWalletSummaries({payload}:any): Generator<any, void, any> {
  try {
    const { status, data } = yield call(apiGetWalletSummaries,payload);
    yield put(status === 200 ? setWalletSummaries(data) : failedWalletSummaries(data));
  } catch (error: any) {
    yield put(failedWalletSummaries(error?.response?.data));
  }
}

function* workGetFetchBalance(): Generator<any, void, any> {
  try {
    const { status, data } = yield call(apiFetchBalance);
    yield put(status === 200 ? setFetchBalance(data) : failedFetchBalance(data));
  } catch (error: any) {
    yield put(failedFetchBalance(error?.response?.data));
  }
}

function* workGetDeposit({payload}:any): Generator<any, void, any> {
  try {
    console.log("payload",payload)
    const { status, data } = yield call(apiDeposit,payload);
    yield put(status === 200 ? setDeposit(data) : failedDeposit(data));
  } catch (error: any) {
    yield put(failedDeposit(error?.response?.data));
  }
}

function* workGetBalanceTransfer(): Generator<any, void, any> {
  try {
    const { status, data } = yield call(apiBalanceTransfer);
    yield put(status === 200 ? setBalanceTransfer(data) : failedBalanceTransfer(data));
  } catch (error: any) {
    yield put(failedBalanceTransfer(error?.response?.data));
  }
}

function* workGetPurchaseOrder({payload}:any): Generator<any, void, any> {
  try {
    const { status, data } = yield call(apiPurchaseOrder,payload);
    yield put(status === 200 ? setPurchaseOrder(data) : failedPurchaseOrder(data));
  } catch (error: any) {
    yield put(failedPurchaseOrder(error?.response?.data));
  }
}

export function* watchGetWalletSummaries() {
  yield takeLatest("wallet/getWalletSummaries", workGetWalletSummaries);
}

export function* watchGetFetchBalance() {
  yield takeLatest("wallet/getFetchBalance", workGetFetchBalance);
}

export function* watchGetDeposit() {
  yield takeLatest("wallet/getDeposit", workGetDeposit);
}

export function* watchGetBalanceTransfer() {
  yield takeLatest("wallet/getBalanceTransfer", workGetBalanceTransfer);
}

export function* watchGetPurchaseOrder() {
  yield takeLatest("wallet/getPurchaseOrder", workGetPurchaseOrder);
}