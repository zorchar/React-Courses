import React, { createContext, useContext, useEffect, useState } from "react";
import { getCourses } from "../api/professorsAPI";
import { LoginContext } from "./LoginContext";

export const CoursesContext = createContext()

const CoursesContextProvider = ({ children }) => {
    const [coursesDB, setCoursesDB] = useState(null)
    const { loginState } = useContext(LoginContext)
    const [course, setCourse] = useState(null)
    const [lastClickedClass, setLastClickedClass] = useState([])
    const [classDate, setClassDate] = useState(null)

    useEffect(() => {
        const asyncData = async () => {
            if (loginState.user) {
                const courses = await getCourses()
                setCoursesDB(courses)
            }
        }
        asyncData()
    }, [loginState])

    return (
        <CoursesContext.Provider value={{ coursesDB, setCoursesDB, course, setCourse, lastClickedClass, setLastClickedClass, classDate, setClassDate }}>
            {children}
        </CoursesContext.Provider>
    )
}

export default CoursesContextProvider