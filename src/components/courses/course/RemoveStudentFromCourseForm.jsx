import React, { useContext } from "react";
import { getCourses, removeFromCourse } from "../../../api/professorsAPI";
import { CoursesContext } from "../../../context/CoursesContext";
import { LoginContext } from "../../../context/LoginContext";
import deleteStudentIcon from '../../../icons/delete-student.png'

const RemoveStudentFromCourseForm = ({ course }) => {
    const { setCoursesDB, } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)

    const onSubmitRemoveStudentFromCourse = async (e) => {
        e.preventDefault()
        try {
            const id = e.target[0].value.trim()
            await removeFromCourse(course._id, id, loginState.token)
            const courses = await getCourses()
            setCoursesDB(courses)
            e.target[0].value = ''
        } catch (error) {
            alert('error in onSubmitRemoveStudentFromCourse: ' + error)
        }
    }

    return (
        <>
            <form className="to-course-form" onSubmit={onSubmitRemoveStudentFromCourse}>
                <input type="text" placeholder="Student ID" />
                <button className="no-style">
                    <div className='courses-link'>
                        <img src={deleteStudentIcon} alt="none" className="icon-container" />
                    </div>
                </button>
            </form>
        </>
    )
}

export default RemoveStudentFromCourseForm