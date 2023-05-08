import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../slice/auth-slice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/root-saga";
import dashboardSlice from "../slice/dashboard-slice";
import walletSlice from "../slice/wallet-slice";
import userSlice from "../slice/user-slice";

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        auth: authSlice,
        dashboard : dashboardSlice,
        wallet:walletSlice,
        user:userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;