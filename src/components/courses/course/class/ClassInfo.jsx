import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import AbsenceForm from "./absence/AbsenceForm";
import AbsentStudents from "./AbsentStudents";

const ClassInfo = ({ absentStudents, classDate }) => {
    const { loginState } = useContext(LoginContext)

    const isPostDate = new Date() > new Date(classDate)
    const isAlignDate = (!loginState.isProfessor && isPostDate) ? '' : "flex-center";

    return (
        <>
            <div className={isAlignDate}>Class Date: {new Date(classDate).toDateString()}</div><br />
            {!loginState.isProfessor && isPostDate && <AbsenceForm />}
            {!isPostDate && <div className="flex-center">Class did not take place yet.</div>}
            {loginState.isProfessor && isPostDate && <AbsentStudents absentStudents={absentStudents} />}
        </>
    );
}

export default ClassInfo