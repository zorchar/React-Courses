import React from "react";
import { NavLink } from "react-router-dom"

const ProfessorHome = () => {
    return (
        <>
            <div className="home-links">
                <NavLink
                    to="/courses"
                >Courses</NavLink>
                <NavLink
                    to="/professors/students"
                >Students</NavLink>
            </div>
        </>
    )
}

export default ProfessorHome
