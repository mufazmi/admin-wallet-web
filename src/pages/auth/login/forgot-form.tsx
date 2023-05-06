import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordSchema, loginSchema, verifyLoginSchema } from "../../../validations/auth-validator";
import { getForgotPassword, getLogin, getLoginVerification, setFormState } from "../../../redux/slice/auth-slice";
import { RootState } from "../../../redux/store";

const ForgotForm = () => {


    const dispatch = useDispatch();

    const { isLoading, errors: apiError, user } = useSelector((state: RootState) => state.auth)

    const initialState = {
        mobile: user.mobile
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
                mobile: data.mobile
            }
            dispatch(getForgotPassword(payload))
        } else {
            console.log("Form validation error")
        }
    }

    return (
        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
                <img src="images/logo.svg" alt="logo" />
            </div>

            <h4>Forgot Password? </h4>
            <h6 className="font-weight-light">Verify your mobile to choose a new one.</h6>
            <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="mobile"
                    control={control}
                    render={({ field }) => (

                        <div className="form-group">
                            <input
                                {...field}
                                type="number" readOnly={isLoading} className="form-control form-control-lg" id="mobile" placeholder="Mobile" />
                            <span style={{ color: 'red', fontSize: '12px', opacity: 0.6 }}>{errors?.mobile?.message || apiError.mobile}</span>
                        </div>
                    )}
                />

                <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" disabled={isLoading} type="submit">SEND OTP</button>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '13px', cursor: 'pointer' }} onClick={() => dispatch(setFormState('login'))} className="auth-link text-black">Back to Login page?</div>

            </form>
        </div>
    )

}

export default ForgotForm