import React, { useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteCourse, getAbsencesOfDateAndCourse, getCourses } from "../../../api/professorsAPI";
import { CoursesContext } from "../../../context/CoursesContext";
import { LoginContext } from "../../../context/LoginContext";
import Schedule from "./Schedule";
import Loader from '../../general/Loader'
import CourseInfo from "./CourseInfo";
import studentsIcon from '../../../assets/icons/students-icon.png';
import DeleteCourseButton from "./DeleteCourseButton";
import { ModalContext } from "../../../context/ModalContext";
import Child from './class/ClassInfo'

const Course = () => {
    const { courseName } = useParams()
    const { coursesDB, setCoursesDB, course, setCourse } = useContext(CoursesContext)
    const { loginState } = useContext(LoginContext)
    const { setIsModalShown, setModalComponent } = useContext(ModalContext)
    const navigate = useNavigate()

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

        const classAbsences = absences.map((absence) => {
            const reasonsArray = absence.reasons.filter((el) => el.classDate === date)
            return { student: absence.student, reason: reasonsArray[0].reason }
        })

        setModalComponent(<Child absentStudents={classAbsences} classDate={date} />)
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
        </div>
        : <Loader />
    )
}
export default Course