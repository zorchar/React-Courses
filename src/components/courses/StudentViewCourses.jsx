import React, { useContext, useEffect, useState } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import { LoginContext } from "../../context/LoginContext";
import Loader from "../general/Loader";
import IconedLink from "../general/IconedLink";
import coursesIcon from '../../assets/icons/courses-icon.png'

const StudentViewCourses = () => {
    const { coursesDB } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)
    const [studentCourses, setStudentCourses] = useState([])

    useEffect(() => {
        if (coursesDB) {
            const studentId = loginState.user._id
            const filteredCourses = coursesDB.filter(course => course.students.includes(studentId))
            setStudentCourses(filteredCourses)
        }
    }, [coursesDB, loginState])

    return ((coursesDB && studentCourses) ?
        <div className="home-links">
            {studentCourses.map((course) =>
                <IconedLink key={course._id} to={course.name} icon={coursesIcon} />
            )}
            {studentCourses.length === 0 && <h1 className="flex-center">You are not registered to any course.</h1>}
        </div>
        :
        <Loader />
    )
}

export default StudentViewCourses