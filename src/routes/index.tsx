import { Routes, Route, Router } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import DashboardPage from "../pages/dashboard";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from 'react-router-dom'

const ROUTE_LOGIN = '/login'
const ROUTE_DASHBOARD = '/'

const PrivateRoutes = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    return (
        isAuth ? <Outlet /> : <Navigate to={ROUTE_LOGIN} />
    )
}

const MyRoute = () => {

    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path={ROUTE_DASHBOARD} element={<DashboardPage />} />
            </Route>
            <Route path={ROUTE_LOGIN} element={<LoginPage />} />
        </Routes>
    )
}

export default MyRoute;

