import { all, fork } from 'redux-saga/effects';

import * as authSaga from '../saga/auth-saga';


function* rootSaga() {
    yield all([
        ...Object.values(authSaga),
    ].map(fork));
}

export default rootSaga