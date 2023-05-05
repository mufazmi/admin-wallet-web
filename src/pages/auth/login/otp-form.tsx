import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema, verifyLoginSchema } from "../../../validations/auth-validator";
import { getLogin, getLoginVerification } from "../../../redux/slice/auth-slice";
import { RootState } from "../../../redux/store";
import Utils from "../../../utils/utils";

const OtpForm = () => {


    const dispatch = useDispatch();

    const { isLoading, errors: apiError, user } = useSelector((state: RootState) => state.auth)

    const initialState = {
        mobile: user.mobile,
        otp: ''
    }

    const { control, reset, handleSubmit, formState } = useForm({
        mode: 'onChange',
        defaultValues: initialState,
        resolver: yupResolver(verifyLoginSchema)
    });

    const { isValid, dirtyFields, errors } = formState

    const onSubmit = (data: any) => {
        if (isValid) {
            const payload = {
                mobile: user.mobile,
                otp: data.otp,
                mac_id: localStorage.getItem('mac_id')
            }
            console.log({ payload })
            dispatch(getLoginVerification(payload))
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

                <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" disabled={isLoading} type="submit">VERIFY OTP</button>
                </div>
            </form>
        </div>
    )

}

export default OtpForm