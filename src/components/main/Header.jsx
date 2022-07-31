import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { logoutAction } from "../../actions/loginActions"
import { LoginContext } from "../../context/LoginContext"

const Header = () => {
    const { loginState, loginDispatch } = useContext(LoginContext)

    const onLogoutClick = () => {
        loginDispatch(logoutAction())
    }

    const homeLink = { link: '' }
    switch (loginState.isProfessor) {
        case true:
            homeLink.link = '/professors/home'
            break;
        case false:
            homeLink.link = '/students/home'
            break;
        default:
            homeLink.link = '/home'
    }

    return (
        <div className="header">
            <div className="header__nav">
                <div>
                    <NavLink
                        to={homeLink.link}
                        className={({ isActive }) => "home-nav" + (isActive ? ' header__active-link' : "")}
                    >Home
                    </NavLink>
                    {loginState.user &&
                        <NavLink
                            to={(loginState.isProfessor ? "professors" : "students/me") + "/courses"}
                            className={({ isActive }) => isActive ? ' header__active-link' : ""}
                        >Courses
                        </NavLink>}
                    {loginState.isProfessor && <NavLink
                        to={"professors/students"}
                        className={({ isActive }) => isActive ? ' header__active-link' : ""}
                    >Students
                    </NavLink>}
                </div>
                <div>
                    {!loginState.user &&
                        <NavLink to="/login" className={({ isActive }) => isActive ? ' header__active-link' : ""}>Login</NavLink>
                    }
                    {loginState.user &&
                        <>
                            <NavLink
                                to={(loginState.isProfessor ? "professors" : "students") + "/me"}
                                end
                                className={({ isActive }) => isActive ? ' header__active-link' : ""}
                            >{loginState.user.email}
                            </NavLink>
                            <NavLink
                                to="/home"
                                onClick={onLogoutClick}>
                                Logout
                            </NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header