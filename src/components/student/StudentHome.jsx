import React from "react";
import { NavLink } from "react-router-dom";

const StudentHome = () => {
    return (
        <>
            <div className="home-links">
                <NavLink
                    to="/courses"
                >Courses</NavLink>
            </div>
        </>
    )
}

export default StudentHome