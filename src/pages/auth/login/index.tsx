import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import OtpForm from "./otp-form";
import LoginForm from "./login-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ForgotForm from "./forgot-form";
import ResetForm from "./reset-form";

const LoginPage = () => {


    const { form, isAuth } = useSelector((state: RootState) => state.auth)

    const navigate = useNavigate();

    let uniqueId = localStorage.getItem('mac_id');

    if (!uniqueId) {
        const randomNumber = Math.floor(Math.random() * 100000000);
        localStorage.setItem('mac_id', randomNumber.toString());
    }


    useEffect(() => {
        let uniqueId = localStorage.getItem('mac_id');

        if (!uniqueId) {
            const randomNumber = Math.floor(Math.random() * 100000000);
            localStorage.setItem('mac_id', randomNumber.toString());
        }

        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                {
                                    form === 'login' ?
                                        <LoginForm /> :
                                        form === 'otp' ?
                                            <OtpForm /> :
                                            form === 'forgot' ?
                                                <ForgotForm /> :
                                                form === 'reset' ?
                                                    <ResetForm />
                                                    : <h1></h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default LoginPage