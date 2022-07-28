import React from "react";
import studentsIcon from '../../assets/icons/students-icon.png'
import coursesIcon from '../../assets/icons/courses-icon.png'
import IconedLink from "../general/IconedLink";

const ProfessorHome = () => {
    return (
        <div className="home-links">
            <IconedLink to="/professors/courses" icon={coursesIcon} label='Courses' />
            <IconedLink to="/professors/students" icon={studentsIcon} label='Students' />
        </div>
    )
}

export default ProfessorHome