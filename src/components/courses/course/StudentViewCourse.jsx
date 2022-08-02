import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../../context/CoursesContext";
import Schedule from "./Schedule";
import Loader from '../../general/Loader'
import CourseInfo from "./CourseInfo";
import { ModalContext } from "../../../context/ModalContext";
import ClassInfoStudentView from "./class/ClassInfoStudentView";
import { getAndSetCourse } from "../../../api/allUsersAPI";
import { setLastClickedClassDate } from "../../../actions/coursesActions";
import { showModalAndSetContent } from "../../../actions/modalActions";

const StudentViewCourse = () => {
    const { courseId } = useParams()
    const { coursesDispatch } = useContext(CoursesContext)
    const { currentCourse: course } = useContext(CoursesContext).coursesState
    const { modalDispatch } = useContext(ModalContext)


    const onClickClass = async (date) => {
        coursesDispatch(setLastClickedClassDate(date))
        modalDispatch(showModalAndSetContent(<ClassInfoStudentView classDate={date} />))
    }

    useEffect(() => {
        getAndSetCourse(courseId, coursesDispatch)
    }, [courseId, coursesDispatch])

    return (course?._id === courseId ?
        <div className="width-75-percent">
            <CourseInfo course={course} />
            <Schedule schedule={course.schedule} onClickClass={onClickClass} />
        </div>
        : <Loader />
    )
}
export default StudentViewCourse