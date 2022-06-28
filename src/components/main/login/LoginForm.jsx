import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../../actions/loginActions";
import { LoginContext } from "../../../context/LoginContext";
import { signInProfessor, signInStudent } from '../../../api/professorsAPI'

const LoginForm = () => {
    const { loginState, loginDispatch } = useContext(LoginContext)
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

        const email = e.target[0].value.trim()
        const password = e.target[1].value.trim();

        (async () => {
            let data = await signInStudent(email, password)
            if (data) {
                localStorage.setItem('token', data.token)
                return loginDispatch(loginAction({ user: data.user, isProfessor: false, token: data.token }))
            }
            else
                data = await signInProfessor(email, password)
            if (data) {
                localStorage.setItem('token', data.token)
                return loginDispatch(loginAction({ user: data.user, isProfessor: true, token: data.token }))
            }
        })();
    }
    return (
        <>
            <form onSubmit={onSubmitLoginForm}>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default LoginForm