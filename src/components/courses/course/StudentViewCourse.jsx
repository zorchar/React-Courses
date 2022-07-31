import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../../context/CoursesContext";
import Schedule from "./Schedule";
import Loader from '../../general/Loader'
import CourseInfo from "./CourseInfo";
import { ModalContext } from "../../../context/ModalContext";
import ClassInfoStudentView from "./class/ClassInfoStudentView";
import { getCourse } from "../../../api/API";
import { setCurrentCourse, setLastClickedClassDate } from "../../../actions/coursesActions";

const StudentViewCourse = () => {
    const { courseName } = useParams()
    const { coursesDispatch } = useContext(CoursesContext)
    const { currentCourse: course } = useContext(CoursesContext).coursesState
    const { setIsModalShown, setModalComponent } = useContext(ModalContext)

    const onClickClass = async (date) => {
        coursesDispatch(setLastClickedClassDate(date))
        setModalComponent(<ClassInfoStudentView classDate={date} />)
        setIsModalShown(true)
    }

    useEffect(() => {
        const getAndSetCourse = async () => {
            const requestedCourse = await getCourse(courseName)
            setLastClickedClassDate(setCurrentCourse(requestedCourse))
        }
        getAndSetCourse()
            .catch((err) => console.log(err))
    }, [courseName, coursesDispatch])

    return (course?.name === courseName ?
        <div className="width-75-percent">
            <CourseInfo course={course} />
            <Schedule schedule={course.schedule} onClickClass={onClickClass} />
        </div>
        : <Loader />
    )
}
export default StudentViewCourse

// import React, { useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { CoursesContext } from "../../../context/CoursesContext";
// import Schedule from "./Schedule";
// import Loader from '../../general/Loader'
// import CourseInfo from "./CourseInfo";
// import { ModalContext } from "../../../context/ModalContext";
// import ClassInfoStudentView from "./class/ClassInfoStudentView";
// import { getCourse } from "../../../api/API";

// const StudentViewCourse = () => {
//     const { courseName } = useParams()
//     const { course, setCourse, setClassDate } = useContext(CoursesContext)
//     const { setIsModalShown, setModalComponent } = useContext(ModalContext)

//     const onClickClass = async (date) => {
//         setClassDate(date)
//         setModalComponent(<ClassInfoStudentView classDate={date} />)
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
//         </div>
//         : <Loader />
//     )
// }
// export default StudentViewCourse