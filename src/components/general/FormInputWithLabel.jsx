import React from "react";

const FormInputWithLabel = ({ type, placeholder, id, name, validationFunc }) => {
    const onChangeSetInput = (e) => {
        if (validationFunc) {
            const input = validationFunc(e.target.value)
            e.target.value = input.toString()
        }
    }

    return (
        <>
            <label htmlFor={id}>{placeholder + ': '}</label>
            <input onChange={onChangeSetInput} name={name} id={id} type={type} placeholder={placeholder} /><br />
        </>
    )
}

export default FormInputWithLabel