import React, { createContext, useContext, useEffect, useState } from "react";
import { getCourses } from "../api/professorsAPI";
import { LoginContext } from "./LoginContext";

export const CoursesContext = createContext()

const CoursesContextProvider = (props) => {
    const [coursesDB, setCoursesDB] = useState(null)
    const { loginState } = useContext(LoginContext)

    useEffect(() => {
        const asyncData = async () => {
            if (loginState.user) {
                const courses = await getCourses()
                setCoursesDB(courses)
            }
        }
        asyncData().catch()
    }, [setCoursesDB, loginState])

    return (
        <CoursesContext.Provider value={{ coursesDB, setCoursesDB }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export default CoursesContextProvider