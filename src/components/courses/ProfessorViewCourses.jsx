import React, { useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import Loader from "../general/Loader";
import IconedLink from "../general/IconedLink";
import coursesIcon from '../../assets/icons/courses-icon.png'
import addCourseIcon from '../../assets/icons/add-course.png'

const ProfessorViewCourses = () => {
    const { coursesDB } = useContext(CoursesContext)

    return ((coursesDB) ?
        <div className="home-links">
            {coursesDB.map((course) =>
                <IconedLink key={course._id} to={course.name} icon={coursesIcon} />
            )}
            <IconedLink to={'add-course'} icon={addCourseIcon} label={'Add Course'} />
        </div>
        :
        <Loader />
    )
}

export default ProfessorViewCourses