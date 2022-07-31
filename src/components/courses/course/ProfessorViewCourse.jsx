import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCourse, getAbsencesOfDateAndCourse, getCourses } from "../../../api/professorsAPI";
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
import { getCourse } from "../../../api/API";
import { setCourses, setCurrentCourse, setLastClickedClassDate } from "../../../actions/coursesActions";

const ProfessorViewCourse = () => {
    const { courseName } = useParams()
    const { coursesDispatch } = useContext(CoursesContext)
    const { currentCourse: course } = useContext(CoursesContext).coursesState
    const { loginState } = useContext(LoginContext)
    const { setIsModalShown, setModalComponent } = useContext(ModalContext)
    const navigate = useNavigate()

    const onClickDeleteCourse = async () => {
        try {
            const data = await deleteCourse(courseName, loginState.token)
            const acknowledged = data.acknowledged
            if (acknowledged) {
                const coursesFromDB = await getCourses()
                coursesDispatch(setCourses(coursesFromDB))
                navigate('/professors/courses')
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
        coursesDispatch(setLastClickedClassDate(date))
        setModalComponent(<ClassInfoProfessorView absentStudents={classAbsences} classDate={date} />)
        setIsModalShown(true)
    }

    useEffect(() => {
        const getAndSetCourse = async () => {
            const requestedCourse = await getCourse(courseName)
            coursesDispatch(setCurrentCourse(requestedCourse))
            return requestedCourse;
        }
        getAndSetCourse()
            .catch((err) => console.log(err))
    }, [courseName, coursesDispatch])

    return (course?.name === courseName ?
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

// import React, { useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { deleteCourse, getAbsencesOfDateAndCourse, getCourses } from "../../../api/professorsAPI";
// import { CoursesContext } from "../../../context/CoursesContext";
// import { LoginContext } from "../../../context/LoginContext";
// import Schedule from "./Schedule";
// import Loader from '../../general/Loader'
// import CourseInfo from "./CourseInfo";
// import studentsIcon from '../../../assets/icons/students-icon.png';
// import DeleteCourseButton from "./DeleteCourseButton";
// import { ModalContext } from "../../../context/ModalContext";
// import IconedLink from "../../general/IconedLink";
// import ClassInfoProfessorView from "./class/ClassInfoProfessorView";
// import { getCourse } from "../../../api/API";

// const ProfessorViewCourse = () => {
//     const { courseName } = useParams()
//     const { setCourses, course, setCourse, setClassDate } = useContext(CoursesContext)
//     const { loginState } = useContext(LoginContext)
//     const { setIsModalShown, setModalComponent } = useContext(ModalContext)
//     const navigate = useNavigate()

//     const onClickDeleteCourse = async () => {
//         try {
//             const data = await deleteCourse(courseName, loginState.token)
//             const acknowledged = data.acknowledged
//             if (acknowledged) {
//                 const coursesFromDB = await getCourses()
//                 setCourses(coursesFromDB)
//                 navigate('/courses')
//             }
//         }
//         catch (error) {
//             alert(error)
//         }
//     }

//     const onClickClass = async (date) => {
//         const absences = await getAbsencesOfDateAndCourse(
//             {
//                 courseId: course._id,
//                 classDate: date
//             },
//             loginState.token
//         )

//         const classAbsences = absences.map((absence) => {
//             const reasonsArray = absence.reasons.filter((el) => el.classDate === date)
//             return { student: absence.student, reason: reasonsArray[0].reason }
//         })

//         setClassDate(date)
//         setModalComponent(<ClassInfoProfessorView absentStudents={classAbsences} classDate={date} />)
//         setIsModalShown(true)
//     }

//     useEffect(() => {
//         const getAndSetCourse = async () => {
//             const requestedCourse = await getCourse(courseName)
//             setCourse(requestedCourse)
//         }
//         getAndSetCourse()
//             .catch((err) => console.log(err))
//     }, [courseName, setCourse])

//     return (course?.name === courseName ?
//         <div className="width-75-percent">
//             <CourseInfo course={course} />
//             <Schedule schedule={course.schedule} onClickClass={onClickClass} />
//             <div className="flex-between">
//                 <IconedLink to={'students'} icon={studentsIcon} label={'Students'} />
//                 <DeleteCourseButton onClickDeleteCourse={onClickDeleteCourse} />
//             </div>
//         </div>
//         : <Loader />
//     )
// }
// export default ProfessorViewCourse