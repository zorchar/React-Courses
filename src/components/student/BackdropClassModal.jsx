import React from "react";
import ClassModal from "./ClassModal";

const BackdropClassModal = ({ setIsClassModalShown, classDate }) => {
    const onClickContainer = (e) => {
        if (e.target === e.currentTarget)
            setIsClassModalShown(false)
    }
    return (
        <div onClick={onClickContainer} className="backdrop">
            <ClassModal />
        </div>
    )
}

export default BackdropClassModal