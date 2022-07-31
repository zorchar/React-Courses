import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CoursesContext } from '../../../context/CoursesContext'
import studentIcon from '../../../assets/icons/student-male.png'
import AddStudentToCourseForm from './AddStudentToCourseForm'
import RemoveStudentFromCourseForm from './RemoveStudentFromCourseForm'
import { setCurrentCourse } from '../../../actions/coursesActions'

const CourseStudents = () => {
    const { coursesDispatch } = useContext(CoursesContext)
    const { courses, course } = useContext(CoursesContext).coursesState
    const { courseName } = useParams()

    useEffect(() => {
        if (courses) {
            const filteredCourses = courses.filter(course => course.name === courseName)
            coursesDispatch(setCurrentCourse(filteredCourses[0]))
        }
    }, [courses, coursesDispatch, courseName])

    return (
        <>
            {course && course.students.map((student) => {
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
                <AddStudentToCourseForm course={course} />
                <RemoveStudentFromCourseForm course={course} />
            </div>
        </>
    )
}

export default CourseStudents