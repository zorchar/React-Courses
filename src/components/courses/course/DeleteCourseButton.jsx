import deleteCourseIcon from '../../../assets/icons/delete-course.png';

const DeleteCourseButton = ({ onClickDeleteCourse }) => {
    return (
        <div className='courses-link remove' onClick={onClickDeleteCourse} >
            <img src={deleteCourseIcon} alt="none" className="icon-container" />
            Delete Course
        </div>
    )
}

export default DeleteCourseButton