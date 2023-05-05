import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";

const initialState = {
    isAuth: false,
    isLoading: false,
    showOtpForm : true,
    user: { mobile: '' } as IUser
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getLogin: (state, action: { type: string, payload: { mobile: string, password: string } }) => {
            state.isLoading = true;
            state.user.mobile = action.payload.mobile
        },
        setLogin: (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.user = action.payload;
        },
        failedLogin: (state, action?: PayloadAction<any>) => {
            state.isLoading = false;
        }
    }
});

export const { getLogin, setLogin, failedLogin } = authSlice.actions;
export default authSlice.reducer;
