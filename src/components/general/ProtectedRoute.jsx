import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { LoginContext } from "../../context/LoginContext";

const ProtectedRoute = () => {
    const location = useLocation()
    const { loginState } = useContext(LoginContext)

    switch (loginState.isProfessor) {
        case true:
            if (!location.pathname.includes('/professors/'))
                return <Navigate to={'/professors/home'} replace />;
            else {
                return <Outlet />
            }
        case false:
            if (!location.pathname.includes('/students/'))
                return <Navigate to={'/students/home'} replace />;
            else
                return <Outlet />
        default:
            if (location.pathname === '/home')
                return <Outlet />
            else
                return <Navigate to='/home' replace />;
    }
}

export default ProtectedRoute