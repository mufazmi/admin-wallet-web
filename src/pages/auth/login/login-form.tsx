import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from "../../../validations/auth-validator";
import { getLogin, setFormState } from "../../../redux/slice/auth-slice";
import { RootState } from "../../../redux/store";

const LoginForm = () => {


    const dispatch = useDispatch();

    const { isLoading, errors: apiError } = useSelector((state: RootState) => state.auth)

    const initialState = {
        mobile: '',
        password: ''
    }

    const { control, reset, handleSubmit, formState } = useForm({
        mode: 'onChange',
        defaultValues: initialState,
        resolver: yupResolver(loginSchema)
    });

    const { isValid, dirtyFields, errors } = formState

    const onSubmit = (data: any) => {
        if (isValid) {
            const payload = {
                mobile: data.mobile,
                password: data.password,
                mac_id: localStorage.getItem('mac_id')
            }
            console.log({ payload })
            dispatch(getLogin(payload))
        } else {
            console.log("Form validation error")
        }
    }

    return (
        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
                <img src="images/logo.svg" alt="logo" />
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="font-weight-light">Sign in to continue.</h6>
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
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" disabled={isLoading} type="submit">SIGN IN</button>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '13px', cursor: 'pointer' }} onClick={() => dispatch(setFormState('forgot'))} className="auth-link text-black">Forgot password?</div>
            </form >
        </div >
    )

}

export default LoginForm