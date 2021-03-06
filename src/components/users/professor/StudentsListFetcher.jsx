import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getStudents } from "../../../api/professorsAPI";
import Loader from "../../general/Loader";
import StudentsList from "./StudentsList";

const StudentsListFetcher = ({ filter }) => {
    const [students, setStudents] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getStudents()
            setStudents(data)
        }
        fetchData().catch(console.error)
    }, [])

    return students ? <StudentsList filter={filter} students={students} /> : <Loader />
}

export default StudentsListFetcher