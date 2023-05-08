import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordSchema, loginSchema, verifyLoginSchema } from "../../../validations/auth-validator";
import { getLogin, getLoginVerification, getResetPassword } from "../../../redux/slice/auth-slice";
import { RootState } from "../../../redux/store";
import Utils from "../../../utils/utils";

const ResetForm = () => {

    const dispatch = useDispatch();

    const { isLoading, errors: apiError, user } = useSelector((state: RootState) => state.auth)

    const initialState = {
        mobile: user.mobile,
        otp: '',
        password:''
    }

    const { control, reset, handleSubmit, formState } = useForm({
        mode: 'onChange',
        defaultValues: initialState,
        resolver: yupResolver(forgotPasswordSchema)
    });

    const { isValid, dirtyFields, errors } = formState

    const onSubmit = (data: any) => {
        if (isValid) {
            const payload = {
                mobile: user.mobile,
                otp: data.otp,
                password: data.password,
            }
            dispatch(getResetPassword(payload))
        } else {
            console.log("Form validation error")
        }
    }

    return (
        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
                <img src="images/logo.svg" alt="logo" />
            </div>
            <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="otp"
                    control={control}
                    render={({ field }) => (

                        <div className="form-group">
                            <input
                                {...field}
                                type="number" readOnly={isLoading} className="form-control form-control-lg" id="otp" placeholder="OTP" />
                            <span style={{ color: 'red', fontSize: '12px', opacity: 0.6 }}>{errors?.otp?.message || apiError.otp}</span>
                        </div>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (

                        <div className="form-group">
                            <input
                                {...field}
                                type="password" readOnly={isLoading} className="form-control form-control-lg" id="password" placeholder="Password" />
                            <span style={{ color: 'red', fontSize: '12px', opacity: 0.6 }}>{errors?.password?.message || apiError.password}</span>
                        </div>
                    )}
                />

                <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" disabled={isLoading} type="submit">RESET PASSWORD</button>
                </div>
            </form>
        </div>
    )

}

export default ResetForm