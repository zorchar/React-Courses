import React, { useContext } from "react";
import { loginAction } from "../../../actions/loginActions";
import { patchProfessor } from "../../../api/professorsAPI";
import { patchStudent } from "../../../api/studentAPI";
import { LoginContext } from "../../../context/LoginContext";
import LabelAndInputInfo from "./LabelAndInputInfo";

const EditInfoForm = ({ data, children }) => {
    const { loginState, loginDispatch } = useContext(LoginContext)
    const { onClickToggleDisabledAttribute } = data

    const onSubmitEdit = async (e) => {
        e.preventDefault()

        const patchFunc = loginState.isProfessor ? patchProfessor : patchStudent
        const form = new FormData(e.target)
        const patchedUser = await patchFunc(
            {
                userId: loginState.user._id,
                ...Object.fromEntries(form)
            },
            loginState.token)

        if (patchedUser) {
            loginDispatch(loginAction({ user: patchedUser, isProfessor: loginState.isProfessor, token: loginState.token }))
        }

        onClickToggleDisabledAttribute()
    }

    return (
        <>
            <form onSubmit={onSubmitEdit}>
                <LabelAndInputInfo data={{ ...data, paramString: '_id', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'First Name', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Last Name', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Age', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Email', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Address', type: 'text' }} />
                {children}
            </form>
        </>
    )
}

export default EditInfoForm