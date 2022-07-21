import React from "react";

const AbsenceFormTextArea = ({ isAttended, explanation }) => {
    return (
        <div className="textarea-container">
            <textarea rows={4} cols={50} disabled={isAttended} defaultValue={explanation} />
        </div>

    )
}

export default AbsenceFormTextArea