import React from "react";
import studentIcon from '../../../assets/icons/student-male.png'
import IconedLink from "../../general/IconedLink";

const StudentsList = ({ students, filter }) => {
    return (
        <>
            {students.map((student) => {
                const fullName = student.firstName + " " + student.lastName
                return fullName.toLowerCase().includes(filter) &&
                    <div key={student._id}>
                        <IconedLink to={student._id} icon={studentIcon} label={fullName} />
                    </div>
            })}
        </>
    )
}

export default StudentsList