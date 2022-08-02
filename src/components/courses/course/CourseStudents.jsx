import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CoursesContext } from '../../../context/CoursesContext'
import studentIcon from '../../../assets/icons/student-male.png'
import AddStudentToCourseForm from './AddStudentToCourseForm'
import RemoveStudentFromCourseForm from './RemoveStudentFromCourseForm'
import { setCurrentCourse } from '../../../actions/coursesActions'
import Loader from '../../general/Loader'

const CourseStudents = () => {
    const { coursesDispatch } = useContext(CoursesContext)
    const { courses, currentCourse } = useContext(CoursesContext).coursesState
    const { courseId } = useParams()

    useEffect(() => {
        if (courses !== "pending") {
            const filteredCourses = courses.filter(course => course._id === courseId)
            coursesDispatch(setCurrentCourse(filteredCourses[0]))
        }

    }, [courses, coursesDispatch, courseId])

    return (
        currentCourse !== 'pending' ?
            <>
                {currentCourse.students.map((student) => {
                    return (
                        <div key={student}>
                            <div className='courses-link user-select-text'>
                                <img src={studentIcon} alt="none" className="icon-container user-select-text" />
                                ID: {student}<br />
                            </div>
                        </div>
                    )
                })}
                <div className='flex-around'>
                    <AddStudentToCourseForm course={currentCourse} />
                    <RemoveStudentFromCourseForm course={currentCourse} />
                </div>
            </> :
            <Loader />
    )
}

export default CourseStudents