import React from "react";

const BackdropClassModal = ({ setIsBackdropShown, children }) => {
    const onClickContainer = (e) => {
        if (e.target === e.currentTarget) {
            setIsBackdropShown(false)
        }
    }
    return (
        <div onClick={onClickContainer} className="backdrop">
            {children}
        </div>
    )
}

export default BackdropClassModal