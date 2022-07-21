const CourseInfo = ({ course }) => {
    return (
        <div className="course-info">
            <div className="course-info">Course Name: {course.name}</div>
            <div className="course-info" >Professor Name: {course.professor.firstName} {course.lastName}</div>
            <div className="course-info">Start Date: {new Date(course.startDate).toDateString()}</div>
            <div className="course-info">End Date: {new Date(course.endDate).toDateString()}</div>
            <div className="course-info">Schedule:</div>
        </div>
    )
}

export default CourseInfo