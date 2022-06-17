import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../../actions/loginActions";
import { LoginContext } from "../../../context/LoginContext";
import bcrypt from 'bcryptjs'

const LoginForm = () => {
    const { loginState, loginDispatch, studentsDB, profsDB } = useContext(LoginContext)
    const navigate = useNavigate()

    useEffect(() => {
        const navigateToHome = async () => {
            if (loginState.user)
                navigate('/home')
        }
        navigateToHome()
    }, [loginState, navigate])

    const onSubmitLoginForm = async (e) => {
        e.preventDefault()

        const email = e.target.children[0].value.trim()
        const password = e.target.children[1].value.trim()

        for (let prof of profsDB) {
            if (prof.email === email && prof.password === password) {
                loginDispatch(loginAction({ email: prof.email, isProf: true }))
                return
            }
        }
        for (let student of studentsDB) {
            if (student.email === email && await bcrypt.compare(password, student.password)) {
                loginDispatch(loginAction({ email: student.email, isProf: false }))
                return
            }
        }

    }

    return (
        <>
            <form className="margin-top-4rem" onSubmit={onSubmitLoginForm}>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginForm