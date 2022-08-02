import React, { useMemo, useEffect, useContext, useState } from "react";
import { hideModal } from "../../../../../actions/modalActions";
import { addReasonToAbsence, getReasonFromAbsence } from "../../../../../api/studentAPI";
import { CoursesContext } from "../../../../../context/CoursesContext";
import { LoginContext } from "../../../../../context/LoginContext";
import { ModalContext } from "../../../../../context/ModalContext";
import SubmitButton from "../../../../general/SubmitButton";
import AbsenceFormTextArea from "./AbsenceFormTextArea";
import YesNoRadio from "./YesNoRadio";

const AbsenceForm = () => {
    const [isAttended, setIsAttended] = useState(false)
    const [explanation, setExplanation] = useState(null)
    const [absenceId, setAbsenceId] = useState(null)
    const { loginState } = useContext(LoginContext)
    const { lastClickedClassDate, currentCourse } = useContext(CoursesContext).coursesState
    const { modalDispatch } = useContext(ModalContext)

    const reason = useMemo(() => ({
        courseId: currentCourse._id,
        studentId: loginState.user._id,
        classDate: new Date(lastClickedClassDate)
    }), [currentCourse._id, loginState.user._id, lastClickedClassDate])

    const onSubmitAbsenceForm = async (e) => {
        e.preventDefault()
        try {
            reason.reason = e.target[2].value.trim()
            reason.isAttended = isAttended

            await addReasonToAbsence(absenceId, reason, loginState.token)

            modalDispatch(hideModal())

            alert(isAttended ? 'Status: Attended' : 'Reason added to absence')
        } catch (error) {
            alert('Error in onSubmitAbsenceForm' + error)
        }

    }

    useEffect(() => {
        const getExplanation = async () => {
            try {
                const absenceStatus = await getReasonFromAbsence(reason, loginState.token)
                setExplanation(absenceStatus.reason)
                setIsAttended(absenceStatus.isAttended)
                setAbsenceId(absenceStatus.id)
            } catch (error) {
                console.log(error);
            }
        }
        getExplanation()
    }, [reason, loginState.token])

    return (
        <form onSubmit={onSubmitAbsenceForm}>
            <div>
                Did you attend?
                <YesNoRadio isAttended={isAttended} setIsAttended={setIsAttended} />
            </div>
            {!isAttended && <AbsenceFormTextArea explanation={explanation} isAttended={isAttended} />}
            <div>
                <SubmitButton />
            </div>
        </form>
    )
}

export default AbsenceForm