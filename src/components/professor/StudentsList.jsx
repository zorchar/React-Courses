import React from "react";
import { NavLink } from "react-router-dom";

const StudentsList = ({ students }) => {
    return (
        <>
            {students.map((student) => {
                return (
                    <NavLink to={student._id} key={student._id}>student: {student.firstName} <br /></NavLink>
                )
            })}
        </>
    )
}

export default StudentsList