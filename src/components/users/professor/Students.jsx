import React from "react";
import { NavLink } from "react-router-dom"
import StudentsListFetcher from "./StudentsListFetcher";
import addStudentIcon from '../../../icons/add-student.png'

const Students = () => {
    return (
        <div className="home-links">
            <StudentsListFetcher />
            <div>
                <NavLink className='courses-link' to="add-student">
                    <img src={addStudentIcon} alt="none" className="icon-container" />
                    Add Student
                </NavLink>
            </div>
        </div>
    )
}

export default Students