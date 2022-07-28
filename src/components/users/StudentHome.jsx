import React from "react";
import coursesIcon from '../../assets/icons/courses-icon.png'
import IconedLink from "../general/IconedLink";

const StudentHome = () => {
    return (
        <div className="home-links">
            <IconedLink to="/students/me/courses" icon={coursesIcon} label='Courses' />
        </div>
    )
}

export default StudentHome