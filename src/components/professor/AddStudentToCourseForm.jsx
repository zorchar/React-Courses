import React, { useContext } from "react";
import { getCourses, registerForCourse } from "../../api/professorsAPI";
import { CoursesContext } from "../../context/CoursesContext";
import { LoginContext } from "../../context/LoginContext";

const AddStudentToCourseForm = ({ course }) => {
    const { setCoursesDB, } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)

    const onClickAddStudentToCourse = async (e) => {
        e.preventDefault()
        try {
            const id = e.target[0].value.trim()

            await registerForCourse(course[0]._id, id, loginState.token)
            const courses = await getCourses()
            setCoursesDB(courses)
        } catch {
            alert('error in onClickAddStudentToCourse')
        }
    }

    return (
        <>
            <form onSubmit={onClickAddStudentToCourse}>
                <input type="text" placeholder="Student ID" />
                <button>Add Student To Course</button>
            </form>
        </>
    )
}

export default AddStudentToCourseForm