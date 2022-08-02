import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../../../api/professorsAPI";
import { LoginContext } from "../../../context/LoginContext";
import SubmitButton from '../../general/SubmitButton'
import LabelAndInputInfo from "../edit/LabelAndInputInfo";

const AddStudentForm = () => {
    const navigate = useNavigate()
    const { loginState } = useContext(LoginContext)

    const onSubmitAddStudent = async (e) => {
        e.preventDefault()
        try {

            const newStudent = {
                firstName: e.target[0].value.trim(),
                lastName: e.target[1].value.trim(),
                age: e.target[2].value.trim(),
                email: e.target[3].value.trim(),
                address: e.target[4].value.trim(),
                password: e.target[5].value.trim()
            }

            const createdStudent = await createStudent(newStudent, loginState.token)
            if (createdStudent)
                navigate('/professors/students')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={onSubmitAddStudent}>
            <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'First Name', type: 'text' }} />
            <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Last Name', type: 'text' }} />
            <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Age', type: 'number' }} />
            <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Email', type: 'text' }} />
            <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Adress', type: 'text' }} />
            <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Password', type: 'password' }} />
            <LabelAndInputInfo data={{ isInputDisabledAttribute: false, queriedUser: [], paramString: 'Validate Password', type: 'password' }} />
            <SubmitButton />
        </form>
    )
}

export default AddStudentForm