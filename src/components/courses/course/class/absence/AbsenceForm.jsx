import React, { useMemo, useEffect, useContext, useState } from "react";
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
    const { loginState } = useContext(LoginContext)
    const { classDate, course } = useContext(CoursesContext)
    const { setIsModalShown } = useContext(ModalContext)

    const reason = useMemo(() => ({
        courseId: course._id,
        studentId: loginState.user._id,
        classDate: new Date(classDate)
    }), [course._id, loginState.user._id, classDate])

    const onSubmitAbsenceForm = async (e) => {
        e.preventDefault()

        try {
            reason.reason = e.target[2].value.trim()
            reason.isAttended = isAttended

            await addReasonToAbsence(reason, loginState.token)
            alert(isAttended ? 'Status: Attended' : 'Reason added to absence')
            setIsModalShown(false)
        } catch (error) {
            alert('Error in onSubmitAbsenceForm' + error)
        }

    }

    useEffect(() => {
        const getExplanation = async () => {
            const absenceStatus = await getReasonFromAbsence(reason, loginState.token)
            setExplanation(absenceStatus.reason)
            setIsAttended(absenceStatus.isAttended)
        }
        getExplanation()
            .catch(console.error)
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