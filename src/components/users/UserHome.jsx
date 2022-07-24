import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext";
import studentsIcon from '../../assets/icons/students-icon.png'
import coursesIcon from '../../assets/icons/courses-icon.png'

const UserHome = () => {
    const { loginState } = useContext(LoginContext)
    return (
        <>
            <div className="home-links">
                <div>
                    <Link className='courses-link' to="/courses">
                        <img src={coursesIcon} alt="none" className="icon-container" />
                        Courses
                    </Link>
                </div>
                <div>
                    {loginState.isProfessor && <Link className='courses-link' to="/professors/students">
                        <img src={studentsIcon} alt="none" className="icon-container" />
                        Students
                    </Link>}
                </div>
            </div>
        </>
    )
}

export default UserHome
