import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import DashboardPage from "../pages/dashboard";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";


const ROUTE_LOGIN = '/'
const ROUTE_DASHBOARD = '/dashboard'

const MyRoute = () => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    return (
        <Routes>
            <Route path={ROUTE_LOGIN} Component={LoginPage} />
            <Route path={ROUTE_DASHBOARD} Component={DashboardPage} />
        </Routes>
    )
}

export default MyRoute;