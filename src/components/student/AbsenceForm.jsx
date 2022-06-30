import React from "react";

const AbsenceForm = () => {
    return (
        <form>
            <input type="radio" id="yes" name="is_attended" value="yes" />
            <label htmlFor="yes">Yes</label><br></br>
            <input type="radio" id="no" name="is_attended" value="no" />
            <label htmlFor="no">No</label><br></br>
        </form>
    )
}

export default AbsenceForm