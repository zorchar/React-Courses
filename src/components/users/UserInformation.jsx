import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginAction } from "../../actions/loginActions";
import { deleteStudent, getStudent, patchProfessor } from "../../api/professorsAPI";
import { LoginContext } from "../../context/LoginContext";
import EditInfoForm from '../users/edit/EditInfoForm';
import Loader from '../general/Loader'
import deleteStudentIcon from '../../assets/icons/delete-student.png'
import { patchStudent } from "../../api/studentAPI";

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
                const student = await getStudent(studentId, loginState.token)
                setQueriedUser(student)
            }
            else {
                setQueriedUser(loginState.user)
                setIsMyInfo(true)
            }
        }
        asyncData()
    }, [loginState, studentId])

    const onSubmitEdit = async (e) => {
        e.preventDefault()

        const patchFunc = loginState.isProfessor ? patchProfessor : patchStudent
        const form = new FormData(e.target)

        const patchedUser = await patchFunc(
            {
                userId: loginState.user._id,
                ...Object.fromEntries(form)
            },
            loginState.token)

        if (patchedUser) {
            loginDispatch(loginAction({ user: patchedUser, isProfessor: loginState.isProfessor, token: loginState.token }))
        }

        setIsInputDisabledAttribute(true)
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
                <EditInfoForm data={{ isMyInfo, isInputDisabledAttribute, onSubmitEdit, queriedUser, onClickToggleDisabledAttribute }} />
                {!isMyInfo && <div className='courses-link remove' onClick={onClickDeleteStudent} >
                    <img src={deleteStudentIcon} alt="none" className="icon-container" />
                    Delete Student
                </div>
                }
            </> :
            <Loader />
    )
}

export default UserInformation