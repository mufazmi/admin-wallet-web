import { all, fork } from 'redux-saga/effects';

import * as authSaga from '../saga/auth-saga';
import * as dashboardSaga from '../saga/dashboard-saga'
import * as walletSaga from '../saga/wallet-saga'


function* rootSaga() {
    yield all([
        ...Object.values(authSaga),
        ...Object.values(dashboardSaga),
        ...Object.values(walletSaga)
    ].map(fork));
}

export default rootSaga