import React, { createContext, useReducer, useState } from "react";
import { profs } from "../mockData/users/profs";
import { students } from "../mockData/users/students";
import { initialLoginState, loginReducer } from "../reducers/loginReducer";

export const LoginContext = createContext()

const LoginContextProvider = (props) => {
    const [loginState, loginDispatch] = useReducer(loginReducer, initialLoginState)
    const [studentsDB, setStudentsDB] = useState(students)
    const [profsDB, setProfsDB] = useState(profs)

    return (
        <LoginContext.Provider value={{ loginState, loginDispatch, studentsDB, setStudentsDB, profsDB, setProfsDB }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider