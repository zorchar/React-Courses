import React from "react";
import LabelAndInputInfo from "./LabelAndInputInfo";
import SubmitButton from "../../general/SubmitButton";
import editButton from '../../../assets/icons/edit.png'

const EditInfoForm = ({ data }) => {
    const { onSubmitEdit, isMyInfo, onClickToggleDisabledAttribute, isInputDisabledAttribute } = data
    return (
        <>
            <form onSubmit={onSubmitEdit}>
                <LabelAndInputInfo data={{ ...data, paramString: '_id', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'First Name', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Last Name', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Age', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Email', type: 'text' }} />
                <LabelAndInputInfo data={{ ...data, paramString: 'Address', type: 'text' }} />
                {isMyInfo && <div className="flex-start-with-gap">
                    <div className="no-style courses-link" onClick={onClickToggleDisabledAttribute}>
                        <img src={editButton} alt='' className="icon-container" />
                        Edit
                    </div>
                    {!isInputDisabledAttribute && <SubmitButton />}
                </div>}
            </form>
        </>
    )
}

export default EditInfoForm