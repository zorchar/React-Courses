import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../context/CoursesContext";

const Course = () => {
    const { courseName } = useParams()
    const { coursesDB } = useContext(CoursesContext)

    const course = coursesDB.filter(course => course.name === courseName)

    return (
        <div>
            {
                Object.entries(course[0]).map((entry, i) => <div key={i}>{entry[0]}: {entry[1]}</div>)
            }
        </div>
    )
}
export default Course