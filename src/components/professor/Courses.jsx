import React, { Fragment, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CoursesContext } from "../../context/CoursesContext";
import { LoginContext } from "../../context/LoginContext";
import Loader from "../general/Loader";

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
        <>
            {(loginState.isProfessor ? coursesDB : studentCourses).map((course, i) =>
                <Fragment key={i}>
                    <NavLink to={course.name} name={course.name}>{course.name}</NavLink><br />
                </Fragment>
            )}
            {loginState.isProfessor && <NavLink to={'/courses/add-course'}>Add Course</NavLink>}
            {!loginState.isProfessor && studentCourses.length === 0 && <h1 className="flex-center">You are not registered to any course.</h1>}
        </>
        : <Loader />
    )
}

export default Courses