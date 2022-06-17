import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import bcrypt from "bcryptjs"
import { useNavigate } from "react-router-dom";

const EditSelfForm = () => {
    const navigate = useNavigate()
    const { loginState, studentsDB, profsDB, setStudentsDB, setProfsDB } = useContext(LoginContext)

    const setNewDBWithEditedUser = () => {
        if (loginState.isProf) {
            const newDB = profsDB
            newDB[signedInUserIndex] = signedInUser
            setProfsDB(newDB)
        }
        else {
            const newDB = studentsDB
            newDB[signedInUserIndex] = signedInUser
            setStudentsDB(newDB)
        }
    }

    const onSubmitEdit = (e) => {
        e.preventDefault()

        const firstName = e.target.children[0].value.trim()
        const lastName = e.target.children[1].value.trim()
        const age = e.target.children[2].value.trim()
        const email = e.target.children[3].value.trim()
        const address = e.target.children[4].value.trim()

        signedInUser = {
            ...signedInUser,
            firstName,
            lastName,
            age,
            email,
            address
        }

        /// change to mongoDB

        setNewDBWithEditedUser()
    }

    const onClickResetPassword = async () => {
        signedInUser = {
            ...signedInUser,
            password: await bcrypt.hash('123', 8)
        }
        setNewDBWithEditedUser()
        navigate('../password-reseted')
    }

    const onClickChangePassword = async () => {
        navigate('../change-password')
    }

    ////////////////////////////// change to a function
    let signedInUser
    let signedInUserIndex
    //let signedInUserId
    (() => {
        for (let [i, prof] of profsDB.entries()) {
            if (prof.email === loginState.user) {
                signedInUser = prof
                signedInUserIndex = i
                //signedInUserId=_id
                return
            }
        }
        for (let [i, student] of studentsDB.entries()) {
            if (student.email === loginState.user) {
                signedInUser = student
                signedInUserIndex = i
                return
            }
        }
    })()
    /////////////////////////////////////

    return (
        <>
            <form className="margin-top-4rem" onSubmit={onSubmitEdit}>
                <input type="text" placeholder="First Name" defaultValue={signedInUser.firstName} />
                <input type="text" placeholder="Last Name" defaultValue={signedInUser.lastName} />
                <input type="number" placeholder="Age" defaultValue={signedInUser.age} />
                <input type="email" placeholder="Email" defaultValue={signedInUser.email} />
                <input type="text" placeholder="Address" defaultValue={signedInUser.address} />
                <button>Submit</button>
            </form>
            <button onClick={onClickResetPassword}>Reset Password</button>
            <button onClick={onClickChangePassword}>Change Password</button>
        </>
    )
}

export default EditSelfForm