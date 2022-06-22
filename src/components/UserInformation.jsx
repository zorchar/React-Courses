import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../api/professorsAPI";
import { LoginContext } from "../context/LoginContext";
import Loader from "./general/Loader";

const UserInformation = () => {
    const { studentId } = useParams()
    const [student, setStudent] = useState(null)
    const { loginState } = useContext(LoginContext)

    useEffect(() => {
        getStudent(studentId || loginState.user.email)
            .then((data) => {
                setStudent(data)
            })
    }, [studentId, loginState.user])

    return (
        student ?
            <div>
                {Object.keys(student).map(key => {
                    return <div key={key}>{key + ': ' + student[key]}</div>
                })}
            </div>
            : <Loader />
    )
}

export default UserInformation