import React, { createContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { loginAction } from "../actions/loginActions";
import { professors } from "../mockData/users/professors";
import { students } from "../mockData/users/students";
import { initialLoginState, loginReducer } from "../reducers/loginReducer";

export const LoginContext = createContext()

const LoginContextProvider = (props) => {
    const [loginState, loginDispatch] = useReducer(loginReducer, initialLoginState)
    const [studentsDB, setStudentsDB] = useState(students)
    const [professorsDB, setProfessorsDB] = useState(professors)

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
            <LoginContext.Provider value={{ loginState, loginDispatch, studentsDB, setStudentsDB, professorsDB, setProfessorsDB }}>
                {props.children}
            </LoginContext.Provider> :
            <div>loading...</div>
    )
}

export default LoginContextProvider