import React from "react";
import { NavLink } from "react-router-dom";
import studentIcon from '../../../icons/student-male.png'

const StudentsList = ({ students }) => {
    return (
        <>
            {students.map((student) => {
                return (
                    <div key={student._id}>
                        <NavLink className='courses-link' to={student._id} >
                            <img src={studentIcon} alt="none" className="icon-container" />
                            {student.firstName}  {student.lastName}<br />
                        </NavLink>
                    </div>
                )
            })}
        </>
    )
}

export default StudentsList