import React from "react";
import { useContext } from "react";
import { CoursesContext } from "../../../../context/CoursesContext";

const BackdropClassModal = ({ setIsClassModalShown, children }) => {
    const { lastClickedClass } = useContext(CoursesContext)
    const onClickContainer = (e) => {
        if (e.target === e.currentTarget) {
            setIsClassModalShown(false)
            lastClickedClass.className = lastClickedClass.className.replace('clicked', '')
        }
    }
    return (
        <div onClick={onClickContainer} className="backdrop">
            {children}
        </div>
    )
}

export default BackdropClassModal