import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCourse, getAbsencesOfDateAndCourse, getAllCourses } from "../../../api/professorsAPI";
import { CoursesContext } from "../../../context/CoursesContext";
import { LoginContext } from "../../../context/LoginContext";
import Schedule from "./Schedule";
import Loader from '../../general/Loader'
import CourseInfo from "./CourseInfo";
import studentsIcon from '../../../assets/icons/students-icon.png';
import DeleteCourseButton from "./DeleteCourseButton";
import { ModalContext } from "../../../context/ModalContext";
import IconedLink from "../../general/IconedLink";
import ClassInfoProfessorView from "./class/ClassInfoProfessorView";
import { getAndSetCourse } from "../../../api/allUsersAPI";
import { setCourses, setLastClickedClassDate } from "../../../actions/coursesActions";
import { showModalAndSetContent } from "../../../actions/modalActions";

const ProfessorViewCourse = () => {
    const { courseId } = useParams()
    const { coursesDispatch } = useContext(CoursesContext)
    const { currentCourse: course } = useContext(CoursesContext).coursesState
    const { loginState } = useContext(LoginContext)
    const { modalDispatch } = useContext(ModalContext)
    const navigate = useNavigate()

    const onClickDeleteCourse = async () => {
        try {
            const data = await deleteCourse(courseId, loginState.token)
            const acknowledged = data.acknowledged
            if (acknowledged) {
                const coursesFromDB = await getAllCourses()
                coursesDispatch(setCourses(coursesFromDB))
                navigate('/professors/courses')
            }
        }
        catch (error) {
            alert(error)
        }
    }

    const onClickClass = async (date) => {
        try {

            const absences = await getAbsencesOfDateAndCourse(
                {
                    courseId: course._id,
                    classDate: date
                },
                loginState.token
            )

            const classAbsences = absences.map((absence) => {
                const reasonsArray = absence.reasons.filter((el) => el.classDate === date)
                return { student: absence.student, reason: reasonsArray[0].reason }
            })

            coursesDispatch(setLastClickedClassDate(date))
            modalDispatch(showModalAndSetContent(<ClassInfoProfessorView absentStudents={classAbsences} classDate={date} />))

        } catch (error) {
            console.log('error on onClickClass: ' + error)
        }
    }

    useEffect(() => {
        getAndSetCourse(courseId, coursesDispatch)
    }, [courseId, coursesDispatch])

    return (course?._id === courseId ?
        <div className="width-75-percent">
            <CourseInfo course={course} />
            <Schedule schedule={course.schedule} onClickClass={onClickClass} />
            <div className="flex-between">
                <IconedLink to={'students'} icon={studentsIcon} label={'Students'} />
                <DeleteCourseButton onClickDeleteCourse={onClickDeleteCourse} />
            </div>
        </div>
        : <Loader />
    )
}
export default ProfessorViewCourse