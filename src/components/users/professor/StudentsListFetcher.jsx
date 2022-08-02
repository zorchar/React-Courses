import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { getStudents } from "../../../api/professorsAPI";
import { LoginContext } from "../../../context/LoginContext";
import Loader from "../../general/Loader";
import StudentsList from "./StudentsList";

const StudentsListFetcher = ({ filter }) => {
    const { loginState } = useContext(LoginContext)
    const [students, setStudents] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getStudents(loginState.token)
            setStudents(data)
        }
        fetchData().catch(console.error)
    }, [])

    return students ? <StudentsList filter={filter} students={students} /> : <Loader />
}

export default StudentsListFetcher