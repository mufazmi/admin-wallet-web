import { Routes,Route } from "react-router-dom";
import LoginPage from "../pages/auth/login";


const ROUTE_LOGIN = '/'

const MyRoute = () =>{
    return (
        <Routes>
            <Route path={ROUTE_LOGIN} Component={LoginPage}/>
        </Routes>
    )
}

export default MyRoute;