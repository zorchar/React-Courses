import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CoursesContext } from '../../../context/CoursesContext'
import studentIcon from '../../../icons/student-male.png'
import AddStudentToCourseForm from './AddStudentToCourseForm'
import RemoveStudentFromCourseForm from './RemoveStudentFromCourseForm'

const CourseStudents = () => {
    const { coursesDB, course, setCourse } = useContext(CoursesContext)
    const { courseName } = useParams()

    useEffect(() => {
        if (coursesDB) {
            const filteredCourses = coursesDB.filter(course => course.name === courseName)
            setCourse(filteredCourses[0])
        }
    }, [coursesDB, setCourse, courseName])

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