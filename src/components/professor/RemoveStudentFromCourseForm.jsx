import React, { useContext } from "react";
import { getCourses, removeFromCourse } from "../../api/professorsAPI";
import { CoursesContext } from "../../context/CoursesContext";
import { LoginContext } from "../../context/LoginContext";

const RemoveStudentFromCourseForm = ({ course }) => {
    const { setCoursesDB, } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)

    const onSubmitRemoveStudentFromCourse = async (e) => {
        e.preventDefault()
        try {
            const id = e.target[0].value.trim()
            await removeFromCourse(course[0]._id, id, loginState.token)
            const courses = await getCourses()
            setCoursesDB(courses)
        } catch (error) {
            alert('error in onSubmitRemoveStudentFromCourse: ' + error)
        }
    }

    return (
        <>
            <form onSubmit={onSubmitRemoveStudentFromCourse}>
                <input type="text" placeholder="Student ID" />
                <button>Remove Student From Course</button>
            </form>
        </>
    )
}

export default RemoveStudentFromCourseForm