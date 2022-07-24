import React from "react";
import { Link } from "react-router-dom";
import studentIcon from '../../../assets/icons/student-male.png'

const StudentsList = ({ students }) => {
    return (
        <>
            {students.map((student) => {
                return (
                    <div key={student._id}>
                        <Link className='courses-link' to={student._id} >
                            <img src={studentIcon} alt="none" className="icon-container" />
                            {student.firstName}  {student.lastName}<br />
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default StudentsList