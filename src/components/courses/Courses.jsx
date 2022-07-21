import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CoursesContext } from "../../context/CoursesContext";
import { LoginContext } from "../../context/LoginContext";
import Loader from "../general/Loader";
import coursesIcon from '../../icons/courses-icon.png'
import addCourseIcon from '../../icons/add-course.png'

const Courses = () => {
    const { coursesDB } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)
    const [studentCourses, setStudentCourses] = useState([])

    useEffect(() => {
        if (!loginState.isProfessor && coursesDB) {
            const studentId = loginState.user._id
            const filteredCourses = coursesDB.filter(course => course.students.includes(studentId))
            setStudentCourses(filteredCourses)
        }
    }, [coursesDB, loginState])

    return ((coursesDB && studentCourses) ?
        <div className="home-links">
            {(loginState.isProfessor ? coursesDB : studentCourses).map((course, i) =>
                <div key={i}>
                    <NavLink className='courses-link' to={course.name} name={course.name}>
                        <img src={coursesIcon} alt="none" className="icon-container" />
                        {course.name}<br />
                    </NavLink>
                </div>
            )}
            {loginState.isProfessor && <NavLink className='courses-link' to={'/courses/add-course'}>
                <img src={addCourseIcon} alt="none" className="icon-container" />
                Add Course</NavLink>}
            {!loginState.isProfessor && studentCourses.length === 0 && <h1 className="flex-center">You are not registered to any course.</h1>}
        </div>
        : <Loader />
    )
}

export default Courses