import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteCourse, getAbsencesOfDateAndCourse, getCourses } from "../../../api/professorsAPI";
import { CoursesContext } from "../../../context/CoursesContext";
import { LoginContext } from "../../../context/LoginContext";
import Schedule from "./Schedule";
import Loader from '../../general/Loader'
import BackdropClassModal from './class/BackdropClassModal'
import CourseInfo from "./CourseInfo";
import studentsIcon from '../../../assets/icons/students-icon.png';
import ClassModal from "./class/ClassModal";
import AbsenceForm from "./class/absence/AbsenceForm";
import AbsentStudents from "./class/AbsentStudents";
import DeleteCourseButton from "./DeleteCourseButton";

const Course = () => {
    const { courseName } = useParams()
    const { coursesDB, setCoursesDB, course, setCourse, setClassDate } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)
    const [isClassModalShown, setIsClassModalShown] = useState(false)
    const [absentStudents, setAbsentStudents] = useState(null)
    const navigate = useNavigate()
    const { classDate } = useContext(CoursesContext)
    const isPostDate = new Date() > new Date(classDate)
    const isAlignDate = (!loginState.isProfessor && isPostDate) ? '' : "flex-center"

    const onClickDeleteCourse = async () => {
        try {
            const data = await deleteCourse(courseName, loginState.token)
            const acknowledged = data.acknowledged
            if (acknowledged) {
                const newCoursesDB = await getCourses()
                setCoursesDB(newCoursesDB)
                navigate('/courses')
            }
        }
        catch (error) {
            alert(error)
        }
    }

    const onClickClass = async (date) => {
        const absences = await getAbsencesOfDateAndCourse(
            {
                courseId: course._id,
                classDate: date
            },
            loginState.token
        )
        setAbsentStudents(absences.map((absence) => {
            const reasonsArray = absence.reasons.filter((el) => el.classDate === date)
            return { student: absence.student, reason: reasonsArray[0].reason }
        }))

        setClassDate(date)
        setIsClassModalShown(true)
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
            <Schedule value={course.schedule} onClickClass={onClickClass} />
            {loginState.isProfessor &&
                <div className="flex-between">
                    <Link className='courses-link' to='students' >
                        <img src={studentsIcon} alt="none" className="icon-container" />
                        Students
                    </Link>
                    <DeleteCourseButton onClickDeleteCourse={onClickDeleteCourse} />
                </div>
            }
            {isClassModalShown &&
                <BackdropClassModal setIsClassModalShown={setIsClassModalShown} >
                    <ClassModal absentStudents={absentStudents} >
                        <div className={isAlignDate}>Class Date: {new Date(classDate).toDateString()}</div><br />
                        {!loginState.isProfessor && isPostDate && <AbsenceForm setIsClassModalShown={setIsClassModalShown} />}
                        {!isPostDate && <div className="flex-center">Class did not take place yet.</div>}
                        {loginState.isProfessor && isPostDate && <AbsentStudents absentStudents={absentStudents} />}
                    </ClassModal>
                </BackdropClassModal>
            }
        </div>
        : <Loader />
    )
}
export default Course