import { all, fork } from 'redux-saga/effects';

import * as authSaga from '../saga/auth-saga';
import * as dashboardSaga from '../saga/dashboard-saga'


function* rootSaga() {
    yield all([
        ...Object.values(authSaga),
        ...Object.values(dashboardSaga)
    ].map(fork));
}

export default rootSaga