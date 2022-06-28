import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoursesContext } from "../../context/CoursesContext";
import { LoginContext } from "../../context/LoginContext";
import Loader from "../general/Loader";

const Courses = () => {
    const { coursesDB } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)

    return (coursesDB ?
        <>
            {coursesDB.map((course, i) =>
                <Fragment key={i}>
                    <NavLink to={course.name} name={course.name}>{course.name}</NavLink><br />
                </Fragment>
            )}
            {loginState.isProfessor && <NavLink to={'/courses/add-course'}>Add Course</NavLink>}
        </>
        : <Loader />
    )
}

export default Courses