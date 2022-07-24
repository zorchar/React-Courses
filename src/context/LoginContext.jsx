import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { loginAction } from "../actions/loginActions";
import { initialLoginState, loginReducer } from "../reducers/loginReducer";
import Loader from '../components/general/Loader'

export const LoginContext = createContext()

const LoginContextProvider = (props) => {
    const [loginState, loginDispatch] = useReducer(loginReducer, initialLoginState)

    useEffect(() => {
        const loginStateFromLocalStorage = localStorage.getItem('loginState')
        if (loginStateFromLocalStorage)
            loginDispatch(loginAction(JSON.parse(loginStateFromLocalStorage)))
        else {
            loginDispatch(loginAction({ user: null, isProfessor: null }))
        }
    }, [])

    return (
        loginState.user !== 'pending' ?
            <LoginContext.Provider value={{ loginState, loginDispatch }}>
                {props.children}
            </LoginContext.Provider> :
            <Loader />
    )
}

export default LoginContextProvider