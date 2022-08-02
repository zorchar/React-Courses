import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../../actions/loginActions";
import { LoginContext } from "../../../context/LoginContext";
import { loginProfessor } from '../../../api/professorsAPI'
import SubmitButton from "../../general/SubmitButton";
import { loginStudent } from "../../../api/studentAPI";
import LabelAndInputInfo from "../../users/edit/LabelAndInputInfo";
import { useState } from "react";

const LoginForm = () => {
    const { loginState, loginDispatch } = useContext(LoginContext)
    const navigate = useNavigate()
    const [isLoginAsProfessor, setIsLoginAsProfessor] = useState(false)

    useEffect(() => {
        const navigateToHome = async () => {
            if (loginState.user)
                navigate('/home')
        }
        navigateToHome()
    }, [loginState, navigate])

    const onSubmitLoginForm = async (e) => {
        e.preventDefault()

        const email = e.target[1].value.trim()
        const password = e.target[2].value.trim();

        let data

        if (isLoginAsProfessor)
            data = await loginProfessor(email, password)
        else
            data = await loginStudent(email, password)

        if (data) {
            localStorage.setItem('token', data.token)
            return loginDispatch(loginAction({ user: data.user, isProfessor: isLoginAsProfessor, token: data.token }))
        }
    }

    return (
        <>
            <form className="center-width" onSubmit={onSubmitLoginForm}>
                <div className="course-info">
                    <label htmlFor="as-professor">Sign in as professor?</label>
                    <input type="checkbox" onChange={() => setIsLoginAsProfessor(!isLoginAsProfessor)} />
                </div>
                <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Email', type: 'email' }} />
                <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Password', type: 'password' }} />
                <SubmitButton />
            </form>
        </>
    )
}


export default LoginForm