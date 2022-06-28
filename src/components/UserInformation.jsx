import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginAction } from "../actions/loginActions";
import { deleteStudent, getStudent, patchProfessor, patchStudent } from "../api/professorsAPI";
import { LoginContext } from "../context/LoginContext";
import EditInfoForm from "./edit/EditInfoForm";
import Loader from './general/Loader'

const UserInformation = () => {
    const navigate = useNavigate()
    const { studentId } = useParams()
    const { loginState, loginDispatch } = useContext(LoginContext)
    const [queriedUser, setQueriedUser] = useState(null)
    const [isInputDisabledAttribute, setIsInputDisabledAttribute] = useState(true)
    const [isMyInfo, setIsMyInfo] = useState(false)

    useEffect(() => {
        const asyncData = async () => {
            if (studentId) {
                setQueriedUser(await getStudent(studentId, loginState.token))
            }
            else {
                setQueriedUser(loginState.user)
                setIsMyInfo(true)
            }
        }
        asyncData().catch()
    }, [loginState, studentId])

    const onSubmitEdit = async (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const patchFunc = loginState.isProfessor ? patchProfessor : patchStudent

        const patchedUser = await patchFunc(
            {
                userId: loginState.user._id,
                ...Object.fromEntries(form)
            },
            loginState.token)

        if (patchedUser) {
            loginDispatch(loginAction({ user: patchedUser, isProfessor: loginState.isProfessor, token: loginState.token }))
        }
    }

    const onClickResetPassword = async () => {
        navigate('../password-reseted')
    }

    const onClickChangePassword = async () => {
        //*change the password*
        navigate('../change-password')
    }

    const onClickToggleDisabledAttribute = () => {
        setIsInputDisabledAttribute(!isInputDisabledAttribute)
    }

    const onClickDeleteStudent = async () => {
        const data = await deleteStudent(studentId, loginState.token)
        const acknowledged = data.acknowledged
        if (acknowledged)
            navigate('/professors/students')
    }

    return (
        queriedUser ?
            <>
                {isMyInfo && <button onClick={onClickToggleDisabledAttribute}>toggle disabled</button>}
                <EditInfoForm data={{ isMyInfo, isInputDisabledAttribute, onSubmitEdit, queriedUser }} />
                {isMyInfo && <button onClick={onClickResetPassword}>Reset Password</button>}
                {isMyInfo && <button onClick={onClickChangePassword}>Change Password</button>}
                {!isMyInfo && <button onClick={onClickDeleteStudent}>Delete Student</button>}
            </> :
            <Loader />
    )
}

export default UserInformation