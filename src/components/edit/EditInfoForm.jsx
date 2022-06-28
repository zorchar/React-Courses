import React from "react";

const EditInfoForm = ({ data }) => {
    const { onSubmitEdit, isInputDisabledAttribute, isMyInfo, queriedUser } = data
    return (
        <>
            <form onSubmit={onSubmitEdit}>
                <input disabled={isInputDisabledAttribute} type="text" name="firstName" placeholder="First Name" defaultValue={queriedUser.firstName} />
                <input disabled={isInputDisabledAttribute} type="text" name="lastName" placeholder="Last Name" defaultValue={queriedUser.lastName} />
                <input disabled={isInputDisabledAttribute} type="number" name="age" placeholder="Age" defaultValue={queriedUser.age} />
                <input disabled={isInputDisabledAttribute} type="email" name="email" placeholder="Email" defaultValue={queriedUser.email} />
                <input disabled={isInputDisabledAttribute} type="text" name="address" placeholder="Address" defaultValue={queriedUser.address} />
                {isMyInfo && <button>Submit</button>}
            </form>
        </>
    )
}

export default EditInfoForm