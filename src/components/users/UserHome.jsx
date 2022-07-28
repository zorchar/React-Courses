import React from "react";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import studentsIcon from '../../assets/icons/students-icon.png'
import coursesIcon from '../../assets/icons/courses-icon.png'
import IconedLink from "../general/IconedLink";

const UserHome = () => {
    const { loginState } = useContext(LoginContext)
    return (
        <div className="home-links">
            <IconedLink to="/courses" icon={coursesIcon} label='Courses' />
            {loginState.isProfessor &&
                <IconedLink to="/professors/students" icon={studentsIcon} label='Students' />
            }
        </div>
    )
}

export default UserHome