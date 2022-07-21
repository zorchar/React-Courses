import React from "react";

const YesNoRadio = ({ isAttended, setIsAttended }) => {
    return (
        <div className="yes-no-radio">
            <input checked={isAttended} onChange={() => setIsAttended(true)} type="radio" id="yes" name="is_attended" value="yes" />
            <label htmlFor="yes">Yes</label><br></br>
            <input checked={!isAttended} onChange={() => setIsAttended(false)} type="radio" id="no" name="is_attended" value="no" />
            <label htmlFor="no">No</label><br></br>
        </div>
    )
}

export default YesNoRadio