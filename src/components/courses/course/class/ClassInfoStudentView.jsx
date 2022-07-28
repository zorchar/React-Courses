import React from "react";
import CloseModalButton from "../../../general/CloseModalButton";
import AbsenceForm from "./absence/AbsenceForm";

const ClassInfoStudentView = ({ classDate }) => {
    const isPostDate = new Date() > new Date(classDate)
    const isAlignDate = (isPostDate) ? '' : "flex-center";

    return (
        <>
            <CloseModalButton />
            <div className={isAlignDate}>Class Date: {new Date(classDate).toDateString()}</div><br />
            {isPostDate && <AbsenceForm />}
            {!isPostDate && <div className="flex-center">Class did not take place yet.</div>}
        </>
    );
}

export default ClassInfoStudentView