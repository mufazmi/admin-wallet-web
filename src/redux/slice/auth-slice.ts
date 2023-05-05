import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import Toast from "../../utils/toast";

const initialState = {
    isAuth: false,
    isLoading: false,
    showOtpForm: true,
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
            if (action.payload.statusCode === 2) {
                Toast.showSuccessToast(action.payload.message ?? 'Enter OTP')
                state.showOtpForm = true
            }
            if (action.payload.statuCode === 1)
                console.log(action.payload)
        },
        failedLogin: (state, action?: PayloadAction<any>) => {
            state.isLoading = false;
            Toast.showErrorToast(action?.payload?.message ?? 'Login Failed')
        },
        getLoginVerification: (state, action) => {
            
        }
    }
});

export const { getLogin, setLogin, failedLogin,getLoginVerification } = authSlice.actions;
export default authSlice.reducer;
