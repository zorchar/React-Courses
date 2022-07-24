import React from "react";
import { Link } from "react-router-dom"
import StudentsListFetcher from "./StudentsListFetcher";
import addStudentIcon from '../../../assets/icons/add-student.png'

const Students = () => {
    return (
        <div className="home-links">
            <StudentsListFetcher />
            <div>
                <Link className='courses-link' to="add-student">
                    <img src={addStudentIcon} alt="none" className="icon-container" />
                    Add Student
                </Link>
            </div>
        </div>
    )
}

export default Students