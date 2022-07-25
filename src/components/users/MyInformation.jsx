import React, { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import EditInfoForm from '../users/edit/EditInfoForm';
import Loader from '../general/Loader'
import EditButton from "../general/EditButton";
import SubmitButton from "../general/SubmitButton";

const MyInformation = () => {
    const { loginState } = useContext(LoginContext)
    const [isInputDisabledAttribute, setIsInputDisabledAttribute] = useState(true)

    const onClickToggleDisabledAttribute = () => {
        setIsInputDisabledAttribute(!isInputDisabledAttribute)
    }

    return (
        loginState.user ?
            <>
                <EditInfoForm data={{ queriedUser: loginState.user, isInputDisabledAttribute, onClickToggleDisabledAttribute }} >
                    <div className="flex-start-with-gap">
                        <EditButton onClickHandler={onClickToggleDisabledAttribute} />
                        {!isInputDisabledAttribute && <SubmitButton />}
                    </div>
                </EditInfoForm>
            </> :
            <Loader />
    )
}

export default MyInformation