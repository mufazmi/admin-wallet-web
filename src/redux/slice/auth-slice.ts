import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";


const errorState = {
    mobile: '',
    password: '',
    otp: ''
}

const initialState = {
    isAuth: false,
    isLoading: false,
    showOtpForm: false,
    errors: { ...errorState },
    user: { mobile: '', token: '' } as IUser
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getLogin: (state, action: { type: string, payload: { mobile: string, password: string } }) => {
            state.isLoading = true;
            state.user.mobile = action.payload.mobile
            state.errors = errorState
        },
        setLogin: (state, action) => {
            state.isLoading = false;
            state.isAuth = true;

            const token = action.payload.token;
            if (action.payload.statusCode === 2) {
                state.showOtpForm = true
            }
            if (action.payload.statuCode === 1 || token) {
                state.user.token = action.payload.token
                localStorage.setItem('token', action.payload.token)
            }
        },
        failedLogin: (state, action?: PayloadAction<any>) => {
            state.isLoading = false;
            const msg = action?.payload.message;
            if (msg == 'Invalid Mobile number')
                state.errors.mobile = msg

            if (msg.toLowerCase().includes('blocked'))
                state.errors.mobile = msg

            if (msg.toLowerCase().includes('invalid password'))
                state.errors.password = msg

            if (msg.toLowerCase().includes('invalid otp'))
                state.errors.otp = msg

        },
        getLoginVerification: (state, action) => {
            state.isLoading = true;
            state.errors = errorState
        }
    }
});

export const { getLogin, setLogin, failedLogin, getLoginVerification } = authSlice.actions;
export default authSlice.reducer;
