import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../../api/professorsAPI";
import { LoginContext } from "../../context/LoginContext";
import EditInfoForm from '../users/edit/EditInfoForm';
import Loader from '../general/Loader'
import DeleteStudentButton from "../general/DeleteStudentButton";

const StudentInformation = () => {
    const { studentId } = useParams()
    const { loginState } = useContext(LoginContext)
    const [queriedUser, setQueriedUser] = useState(null)
    const [isInputDisabledAttribute] = useState(true)

    useEffect(() => {
        const getAndSetQueriedUser = async () => {
            try {
                const student = await getStudent(studentId, loginState.token)
                setQueriedUser(student)
            } catch (err) {
                alert('No student found. Error: ' + err)
            }
        }

        getAndSetQueriedUser()
    }, [])


    return (
        queriedUser ?
            <>
                <EditInfoForm data={{ isInputDisabledAttribute, queriedUser }} />
                <DeleteStudentButton studentId={studentId} />
            </> :
            <Loader />
    )
}

export default StudentInformation