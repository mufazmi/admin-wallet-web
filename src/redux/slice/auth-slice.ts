import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";


const errorState = {
    mobile: '',
    password: '',
    otp: ''
}

const initialState = {
    isAuth: localStorage.getItem('token') != null,
    isLoading: false,
    showOtpForm: false,
    form: 'login',
    // form: 'reset',
    errors: { ...errorState },
    user: { mobile: '', token: '' } as IUser
    // user: { mobile: '9867503256', token: '' } as IUser
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

            const token = action.payload.token;
            if (action.payload.statusCode === 2) {
                state.showOtpForm = true
                state.form = 'otp'
            }
            if (action.payload.statuCode === 1 || token) {
                state.user.token = action.payload.token
                localStorage.setItem('token', action.payload.token)
                if (token)
                    state.isAuth = true;
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
        },

        getForgotPassword: (state, action) => {
            state.isLoading = true;
            state.user.mobile = action.payload.mobile
            state.errors = errorState
        },

        setForgotPassword: (state, action) => {
            state.isLoading = false;
            state.form = 'reset'
        },

        failedForgotPassword: (state, action?: PayloadAction<any>) => {
            state.isLoading = false;
            const msg = action?.payload.message;
            if (msg.toLowerCase().includes('invalid mobile number'))
                state.errors.mobile = msg

            if (msg.toLowerCase().includes('blocked'))
                state.errors.mobile = msg

            if (msg.toLowerCase().includes('invalid password'))
                state.errors.password = msg

            if (msg.toLowerCase().includes('invalid otp'))
                state.errors.otp = msg
        },

        getResetPassword: (state, action) => {
            state.isLoading = true;
            state.errors = errorState
        },

        setResetPassword: (state, action) => {
            state.isLoading = false;
            state.form = 'login'
        },

        failedResetPassword: (state, action?: PayloadAction<any>) => {
            state.isLoading = false;
            const msg = action?.payload.message;
            if (msg.toLowerCase().includes('invalid mobile number'))
                state.errors.mobile = msg

            if (msg.toLowerCase().includes('blocked'))
                state.errors.mobile = msg

            if (msg.toLowerCase().includes('invalid password'))
                state.errors.password = msg

            if (msg.toLowerCase().includes('invalid otp'))
                state.errors.otp = msg

        },

        setFormState: (state, action) => {
            state.form = action.payload
        },

        doLogout : (state, action) => {
            state.isAuth = false
            localStorage.removeItem('token')
        }


    }
});

export const { getLogin, setLogin, failedLogin,
    getLoginVerification,
    getForgotPassword,
    setForgotPassword,
    failedForgotPassword,
    getResetPassword,
    setResetPassword,
    failedResetPassword,
    setFormState,
} = authSlice.actions;
export default authSlice.reducer;
