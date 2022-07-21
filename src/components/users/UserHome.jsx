import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext";
import studentsIcon from '../../icons/students-icon.png'
import coursesIcon from '../../icons/courses-icon.png'

const UserHome = () => {
    const { loginState } = useContext(LoginContext)
    return (
        <>
            <div className="home-links">
                <div>
                    <NavLink className='courses-link' to="/courses">
                        <img src={coursesIcon} alt="none" className="icon-container" />
                        Courses
                    </NavLink>
                </div>
                <div>
                    {loginState.isProfessor && <NavLink className='courses-link' to="/professors/students">
                        <img src={studentsIcon} alt="none" className="icon-container" />
                        Students
                    </NavLink>}
                </div>
            </div>
        </>
    )
}

export default UserHome
