import React, { useContext } from "react";
import bcrypt from 'bcryptjs'
import { LoginContext } from "../../context/LoginContext";

const ChangePassword = () => {
    const { loginState, studentsDB, professorsDB, setStudentsDB, setProfessorsDB } = useContext(LoginContext)
    ////////////////////////////// change to a function
    let signedInUser
    let signedInUserIndex
    //let signedInUserId
    (() => {
        for (let [i, professor] of professorsDB.entries()) {
            if (professor.email === loginState.user.email) {
                signedInUser = professor
                signedInUserIndex = i
                //signedInUserId=_id
                return
            }
        }
        for (let [i, student] of studentsDB.entries()) {
            if (student.email === loginState.user.email) {
                signedInUser = student
                signedInUserIndex = i
                return
            }
        }
    })()
    /////////////////////////////////////

    const setNewDBWithEditedUser = () => {
        if (loginState.isProfessor) {
            const newDB = professorsDB
            newDB[signedInUserIndex] = signedInUser
            setProfessorsDB(newDB)
        }
        else {
            const newDB = studentsDB
            newDB[signedInUserIndex] = signedInUser
            setStudentsDB(newDB)
        }
    }

    const onSubmitChangePassword = async (e) => {
        e.preventDefault()

        const oldPassword = e.target.children[0].value.trim()
        const newPassword = e.target.children[1].value.trim()
        const repeatedNewPassword = e.target.children[2].value.trim()

        if (await bcrypt.compare(oldPassword, signedInUser.password)) {
            if (newPassword === repeatedNewPassword) {
                signedInUser = {
                    ...signedInUser,
                    password: await bcrypt.hash(newPassword, 8)
                }
                setNewDBWithEditedUser()
                alert('Password changed')
            }
            else {
                alert('New passwords do not match')
            }
        }
        else {
            alert('Old password not true')
        }
    }

    return (
        <form onSubmit={onSubmitChangePassword}>
            <input type="password" placeholder="Old Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Retype New Password" />
            <button>Submit</button>
        </form>
    )
}

export default ChangePassword