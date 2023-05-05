import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import OtpForm from "./otp-form";
import LoginForm from "./login-form";

const LoginPage = () => {

    const { showOtpForm } = useSelector((state: RootState) => state.auth)


    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                {
                                    showOtpForm ?
                                    <OtpForm/> :
                                    <LoginForm/>
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