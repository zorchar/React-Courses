import React, { useContext } from "react";
import { getCourses, registerForCourse } from "../../../api/professorsAPI";
import { CoursesContext } from "../../../context/CoursesContext";
import { LoginContext } from "../../../context/LoginContext";
import addStudentIcon from '../../../icons/add-student.png'

const AddStudentToCourseForm = ({ course }) => {
    const { setCoursesDB, } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)

    const onSubmitAddStudentToCourse = async (e) => {
        e.preventDefault()
        try {
            const id = e.target[0].value.trim()

            await registerForCourse(course._id, id, loginState.token)
            const courses = await getCourses()
            setCoursesDB(courses)
            e.target[0].value = ''
        } catch {
            alert('error in onClickAddStudentToCourse')
        }
    }

    return (
        <>
            <form className="to-course-form" onSubmit={onSubmitAddStudentToCourse}>
                <input type="text" placeholder="Student ID" />
                <button className="no-style">
                    <div className='courses-link'>
                        <img src={addStudentIcon} alt="none" className="icon-container" />
                    </div>
                </button>
            </form>
        </>
    )
}

export default AddStudentToCourseForm