import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";
import { createStudent } from "../../api/professorsAPI";

const AddStudentForm = () => {
    const { studentsDB } = useContext(LoginContext)

    useEffect(() => {
        console.log(studentsDB);
    }, [studentsDB])

    const onSubmitAddStudent = async (e) => {
        e.preventDefault()

        const newStudent = {
            firstName: e.target.children[0].value.trim(),
            lastName: e.target.children[1].value.trim(),
            age: e.target.children[2].value.trim(),
            email: e.target.children[3].value.trim(),
            address: e.target.children[4].value.trim(),
            password: e.target.children[5].value.trim()
        }

        createStudent(newStudent)
        // setStudentsDB(studentsDB.concat({
        //     firstName, lastName, age, email, address, password
        // }))
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