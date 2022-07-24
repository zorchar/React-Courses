import React from "react";

const BackdropClassModal = ({ setIsClassModalShown, children }) => {
    const onClickContainer = (e) => {
        if (e.target === e.currentTarget) {
            setIsClassModalShown(false)
        }
    }
    return (
        <div onClick={onClickContainer} className="backdrop">
            {children}
        </div>
    )
}

export default BackdropClassModal