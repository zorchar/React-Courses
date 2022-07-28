import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../../context/CoursesContext";
import Schedule from "./Schedule";
import Loader from '../../general/Loader'
import CourseInfo from "./CourseInfo";
import { ModalContext } from "../../../context/ModalContext";
import ClassInfoStudentView from "./class/ClassInfoStudentView";

const StudentViewCourse = () => {
    const { courseName } = useParams()
    const { coursesDB, course, setCourse, setClassDate } = useContext(CoursesContext)
    const { setIsModalShown, setModalComponent } = useContext(ModalContext)

    const onClickClass = async (date) => {
        setClassDate(date)
        setModalComponent(<ClassInfoStudentView classDate={date} />)
        setIsModalShown(true)
    }

    useEffect(() => {
        if (coursesDB) {
            const filteredCourses = coursesDB.filter(course => course.name === courseName)
            setCourse(filteredCourses[0])
        }
    }, [courseName, coursesDB, setCourse])

    return (course ?
        <div className="width-75-percent">
            <CourseInfo course={course} />
            <Schedule schedule={course.schedule} onClickClass={onClickClass} />
        </div>
        : <Loader />
    )
}
export default StudentViewCourse