import React, { createContext, useContext, useEffect, useState } from "react";
import { getCourses } from "../api/professorsAPI";
import { LoginContext } from "./LoginContext";

export const CoursesContext = createContext()

const CoursesContextProvider = (props) => {
    const [coursesDB, setCoursesDB] = useState(null)
    const { loginState } = useContext(LoginContext)
    const [course, setCourse] = useState(null)
    const [classDate, setClassDate] = useState(null)
    const [lastClickedClass, setLastClickedClass] = useState([])

    useEffect(() => {
        const asyncData = async () => {
            if (loginState.user) {
                const courses = await getCourses()
                setCoursesDB(courses)
            }
        }
        asyncData()
    }, [setCoursesDB, loginState])

    return (
        <CoursesContext.Provider value={{ coursesDB, setCoursesDB, course, setCourse, classDate, setClassDate, lastClickedClass, setLastClickedClass }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export default CoursesContextProvider