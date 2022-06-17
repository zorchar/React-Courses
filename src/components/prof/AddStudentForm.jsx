import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";
import bcrypt from 'bcryptjs'

const AddStudentForm = () => {
    const { studentsDB, setStudentsDB } = useContext(LoginContext)

    useEffect(() => {
        console.log(studentsDB);
    }, [studentsDB])

    const onSubmitAddStudent = async (e) => {
        e.preventDefault()

        const firstName = e.target.children[0].value.trim()
        const lastName = e.target.children[1].value.trim()
        const age = e.target.children[2].value.trim()
        const email = e.target.children[3].value.trim()
        const address = e.target.children[4].value.trim()
        const password = await bcrypt.hash(e.target.children[5].value.trim(), 8)
        setStudentsDB(studentsDB.concat({
            firstName, lastName, age, email, address, password
        }))
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