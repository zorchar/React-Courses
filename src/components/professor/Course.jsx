import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCourse, getCourses } from "../../api/professorsAPI";
import { CoursesContext } from "../../context/CoursesContext";
import { LoginContext } from "../../context/LoginContext";
import Loader from '../general/Loader'
import BackdropClassModal from "../student/BackdropClassModal";
import AddStudentToCourseForm from "./AddStudentToCourseForm";
import RemoveStudentFromCourseForm from "./RemoveStudentFromCourseForm";

const Course = () => {
    const { courseName } = useParams()
    const { coursesDB, setCoursesDB } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)
    const [course, setCourse] = useState(null)
    const [classDate, setClassDate] = useState(null)
    const [isClassModalShown, setIsClassModalShown] = useState(true)
    const navigate = useNavigate()

    const onClickDeleteCourse = async () => {
        try {
            const data = await deleteCourse(courseName, loginState.token)
            const acknowledged = data.acknowledged
            if (acknowledged) {
                const newCoursesDB = await getCourses()
                setCoursesDB(newCoursesDB)
                navigate('/courses')
            }
        }
        catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        if (coursesDB)
            setCourse(
                coursesDB.filter(course => course.name === courseName)
            )
    }, [courseName, coursesDB])

    const onClickClass = (date) => {
        setClassDate(date)
        setIsClassModalShown(true)
    }

    return (course ?
        <>
            {
                Object.entries(course[0]).map(([key, value], i) => {
                    if (key === 'professor') {
                        return <div key={i}>{key}: {value.firstName}</div>
                    }
                    if (key === 'students') {
                        return <div key={i}>students: {value.map((id, j) => {
                            return <div key={id}>student[{j}]: {id}</div>
                        })}</div>
                    }
                    if (key === 'startDate' || key === 'endDate')
                        return <div key={i}>{key}: {new Date(value).toString()}</div>
                    if (key === 'schedule') {
                        return <div key={i}>schedule: {value.map((date, j) => {
                            return <div onClick={() => onClickClass(date)} key={date}>class[{j}]: {new Date(date).toString()}</div>
                        })}</div>
                    }
                    return <div key={i}>{key}: {value}</div>
                })
            }
            {loginState.isProfessor && <button onClick={onClickDeleteCourse}>Delete Course</button>}
            {loginState.isProfessor && <AddStudentToCourseForm course={course} />}
            {loginState.isProfessor && <RemoveStudentFromCourseForm course={course} />}
            {isClassModalShown && <BackdropClassModal classDate={classDate} setIsClassModalShown={setIsClassModalShown} />}
        </>
        : <Loader />
    )
}
export default Course