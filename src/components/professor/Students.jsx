import React from "react";
import { NavLink } from "react-router-dom"
import StudentsListFetcher from "./StudentsListFetcher";

const Students = () => {
    return (
        <div>
            <StudentsListFetcher />
            <NavLink
                to="add-student"
            > Add Student</NavLink >
        </div>
    )
}

export default Students