import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../slice/auth-slice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/root-saga";

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;