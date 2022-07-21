import React, { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { LoginContext } from "../../context/LoginContext";

const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    const { loginState } = useContext(LoginContext)

    switch (loginState.isProfessor) {
        case true:
            if (!location.pathname.includes('/professors/'))
                return <Navigate to={'/professors/'} replace />;
            else
                return children
        case false:
            if (!location.pathname.includes('/students/'))
                return <Navigate to={'/students/'} replace />;
            else
                return children
        default:
            if (location.pathname === '/home')
                return children;
            else
                return <Navigate to='/home' replace />;
    }
}

export default ProtectedRoute