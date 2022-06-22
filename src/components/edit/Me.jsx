import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

const EditSelfForm = () => {
    const navigate = useNavigate()

    const { loginState } = useContext(LoginContext)

    const onSubmitEdit = (e) => {
        e.preventDefault()

        // const form = new FormData(e.target);

        const firstName = e.target.children[0].value.trim()
        const lastName = e.target.children[1].value.trim()
        const age = e.target.children[2].value.trim()
        const email = e.target.children[3].value.trim()
        const address = e.target.children[4].value.trim()
    }

    const onClickResetPassword = async () => {
        // setNewDBWithEditedUser({
        //     ...signedInUser,
        //     password: '123'
        // })
        navigate('../password-reseted')
    }

    const onClickChangePassword = async () => {
        //*change the password*
        navigate('../change-password')
    }

    return (
        <>
            <form onSubmit={onSubmitEdit}>
                <input type="text" placeholder="First Name" defaultValue={loginState.user.firstName} />
                <input type="text" placeholder="Last Name" defaultValue={loginState.user.lastName} />
                <input type="number" placeholder="Age" defaultValue={loginState.user.age} />
                <input type="email" placeholder="Email" defaultValue={loginState.user.email} />
                <input type="text" placeholder="Address" defaultValue={loginState.user.address} />
                <button>Submit</button>
            </form>
            <button onClick={onClickResetPassword}>Reset Password</button>
            <button onClick={onClickChangePassword}>Change Password</button>
        </>

    )
}

export default EditSelfForm