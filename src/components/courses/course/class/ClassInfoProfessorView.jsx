import React from "react";
import CloseModalButton from "../../../general/CloseModalButton";
import AbsentStudents from "./AbsentStudents";

const ClassInfoProfessorView = ({ absentStudents, classDate }) => {
    const isPostDate = new Date() > new Date(classDate)

    return (
        <>
            <CloseModalButton />
            <div className="flex-center">Class Date: {new Date(classDate).toDateString()}</div><br />
            {!isPostDate && <div className="flex-center">Class did not take place yet.</div>}
            {isPostDate && <AbsentStudents absentStudents={absentStudents} />}
        </>
    );
}

export default ClassInfoProfessorView