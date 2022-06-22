import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoursesContext } from "../../context/CoursesContext";

const Courses = () => {
    const { coursesDB } = useContext(CoursesContext)

    return (
        <div>
            {coursesDB.map((course, i) =>
                <NavLink to={course.name} key={i} name={course.name}>{course.name}</NavLink>
            )}
        </div>
    )
}

export default Courses