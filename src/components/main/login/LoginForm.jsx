import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../../actions/loginActions";
import { LoginContext } from "../../../context/LoginContext";
import bcrypt from 'bcryptjs'
import { getProfessor, getStudent } from '../../../api/professorsAPI'

const LoginForm = () => {
    const { loginState, loginDispatch, studentsDB, professorsDB } = useContext(LoginContext)
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
        const password = e.target.children[1].value.trim();

        // for (let professor of professorsDB) {
        //     if (professor.email === email && await bcrypt.compare(password, professor.password)) {
        //         loginDispatch(loginAction({ user: professor.email, isProfessor: true }))
        //         return
        //     }
        // }
        // for (let student of studentsDB) {
        //     if (student.email === email && await bcrypt.compare(password, student.password)) {
        //         loginDispatch(loginAction({ user: student.email, isProfessor: false }))
        //         return
        //     }
        // }
        (async () => {
            let data //= await getStudent(email)
            if (data) {
                console.log(data);
                return loginDispatch(loginAction({ user: data, isProfessor: false }))
            }
            else
                data = await getProfessor(email)
            if (data)
                return loginDispatch(loginAction({ user: data, isProfessor: true }))

        })()

        // getStudent(email)
        //     .then(data => {
        //         // setUser(data)
        //         if (data)
        //             loginDispatch(loginAction({ user: data.email, isProfessor: false }))
        //         else
        //             getProfessor(email)
        //                 .then(data => {
        //                     // setUser(data)
        //                     if (data)
        //                         loginDispatch(loginAction({ user: data.email, isProfessor: false }))
        //                 })
        //     })
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