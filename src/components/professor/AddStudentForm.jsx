import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../../api/professorsAPI";
import { LoginContext } from "../../context/LoginContext";

const AddStudentForm = () => {
    const navigate = useNavigate()
    const { loginState } = useContext(LoginContext)

    const onSubmitAddStudent = async (e) => {
        e.preventDefault()

        const newStudent = {
            firstName: e.target[0].value.trim(),
            lastName: e.target[1].value.trim(),
            age: e.target[2].value.trim(),
            email: e.target[3].value.trim(),
            address: e.target[4].value.trim(),
            password: e.target[5].value.trim()
        }

        const createdStudent = await createStudent(newStudent, loginState.token)
        if (createdStudent)
            navigate('/professors/students')
    }

    return (
        <form onSubmit={onSubmitAddStudent}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="number" placeholder="Age" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Validate Password" />
            <button>Submit</button>
        </form>
    )
}

export default AddStudentForm