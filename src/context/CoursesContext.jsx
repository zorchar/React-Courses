import React, { createContext, useState } from "react";
import { courses } from "../mockData/courses/courses";

export const CoursesContext = createContext()

const CoursesContextProvider = (props) => {
    const [coursesDB, setcoursesDB] = useState(courses)

    return (
        <CoursesContext.Provider value={{ coursesDB, setcoursesDB }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export default CoursesContextProvider