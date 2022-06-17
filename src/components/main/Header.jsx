import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { logoutAction } from "../../actions/loginActions"
import { LoginContext } from "../../context/LoginContext"

const Header = () => {
    const { loginState, loginDispatch } = useContext(LoginContext)

    const onLogoutClick = () => {
        loginDispatch(logoutAction())
    }

    return (
        <div className="header">
            <div className="header__nav">
                <NavLink
                    to="/home"
                    className={({ isActive }) => "home-nav" + (isActive ? ' header__active-link' : "")}
                >Home</NavLink>
                <div>
                    {!loginState.user &&
                        <NavLink to="/login" className={({ isActive }) => isActive ? ' header__active-link' : ""}>Login</NavLink>
                    }
                    {loginState.user &&
                        [
                            <NavLink
                                key={1}
                                to={(loginState.isProf ? "prof" : "student") + "/edit"}>
                                Edit Self</NavLink>,
                            <NavLink
                                key={2}
                                to="/home"
                                onClick={onLogoutClick}>
                                Logout</NavLink>
                        ]
                    }
                </div>
            </div>
        </div>
    )
}

export default Header