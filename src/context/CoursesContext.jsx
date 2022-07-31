import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { setCourses } from "../actions/coursesActions";
import { getCourses } from "../api/professorsAPI";
import coursesReducer from "../reducers/coursesReducer";
import { LoginContext } from "./LoginContext";

export const CoursesContext = createContext()

const CoursesContextProvider = ({ children }) => {
    const { loginState } = useContext(LoginContext)

    // const [courses, setCourses] = useState(null)
    // const [course, setCourse] = useState(null)
    // const [lastClickedClass, setLastClickedClass] = useState([])
    // const [classDate, setClassDate] = useState(null)

    const initialCoursesState = {
        courses: 'pending',
        currentCourse: 'pending',
        lastClickedClassDate: 'pending'
    }

    const [coursesState, coursesDispatch] = useReducer(coursesReducer, initialCoursesState)

    useEffect(() => {
        const asyncData = async () => {
            if (loginState.user) {
                const coursesFromDB = await getCourses()
                coursesDispatch(setCourses(coursesFromDB))
            }
        }
        asyncData()
    }, [loginState])

    return (
        <CoursesContext.Provider value={{ coursesState, coursesDispatch }}>
            {children}
        </CoursesContext.Provider>
    )
}

export default CoursesContextProvider

// import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
// import { getCourses } from "../api/professorsAPI";
// import coursesReducer from "../reducers/coursesReducer";
// import { LoginContext } from "./LoginContext";

// export const CoursesContext = createContext()

// const CoursesContextProvider = ({ children }) => {
//     const { loginState } = useContext(LoginContext)

//     const [courses, setCourses] = useState(null)
//     const [course, setCourse] = useState(null)
//     const [lastClickedClass, setLastClickedClass] = useState([])
//     const [classDate, setClassDate] = useState(null)

//     const initialCoursesState = {
//         courses: 'pending',
//         currentCourse: 'pending',
//         lastClickedClassElement: 'pending',
//         lastClickedClassDate: 'pending'
//     }

//     const [coursesState, coursesDispatch] = useReducer(coursesReducer, initialCoursesState)

//     useEffect(() => {
//         const asyncData = async () => {
//             if (loginState.user) {
//                 const coursesFromDB = await getCourses()
//                 setCourses(coursesFromDB)
//             }
//         }
//         asyncData()
//     }, [loginState])

//     return (
//         <CoursesContext.Provider value={{ courses, setCourses, course, setCourse, lastClickedClass, setLastClickedClass, classDate, setClassDate, coursesState, coursesDispatch }}>
//             {children}
//         </CoursesContext.Provider>
//     )
// }

// export default CoursesContextProvider