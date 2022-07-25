import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteStudent } from '../../api/professorsAPI'
import deleteStudentIcon from '../../assets/icons/delete-student.png'
import { LoginContext } from '../../context/LoginContext'

const DeleteStudentButton = ({ studentId }) => {
    const navigate = useNavigate()
    const { loginState } = useContext(LoginContext)

    const onClickDeleteStudent = async () => {
        const data = await deleteStudent(studentId, loginState.token)
        const acknowledged = data.acknowledged
        if (acknowledged)
            navigate('/professors/students')
    }

    return (
        <div className="courses-link remove" onClick={onClickDeleteStudent}>
            <img src={deleteStudentIcon} alt='' className="icon-container" />
            Delete Student
        </div>
    )
}

export default DeleteStudentButton