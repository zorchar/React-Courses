import React, { useContext } from "react";
import { createCourse, getCourses } from "../../api/professorsAPI";
import { LoginContext } from "../../context/LoginContext";
import FormInputWithLabel from "../general/FormInputWithLabel";
import TableDatePicker from "../general/TableDatePicker";
import { CoursesContext } from '../../context/CoursesContext'
import { useNavigate } from "react-router-dom";
import { validateOnlyWholeNumbers } from "../../utils/inputUtils";
import SubmitButton from '../general/SubmitButton'

const AddCourseForm = () => {
    const { loginState } = useContext(LoginContext)
    const { setCoursesDB } = useContext(CoursesContext)
    const navigate = useNavigate()

    const onSubmitCreateCourse = async (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        try {
            const newCourse = await createCourse(
                {
                    professor: loginState.user._id,
                    ...Object.fromEntries(form),
                    intervals: validateOnlyWholeNumbers(Object.fromEntries(form).intervals)
                },
                loginState.token)

            const courses = await getCourses()
            setCoursesDB(courses)
            navigate('/courses/' + newCourse.name)
            return newCourse // maybe remove
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <form onSubmit={onSubmitCreateCourse}>
                <div className="course-info">
                    <FormInputWithLabel className name='name' id='course-name' type='text' placeholder='Course Name' />
                </div>
                <TableDatePicker />
                <div className="course-info">
                    <FormInputWithLabel name='intervals' id='intervals' type='text' placeholder='Intervals' validationFunc={validateOnlyWholeNumbers} />
                </div>
                <SubmitButton />
            </form>
        </>
    )
}

export default AddCourseForm