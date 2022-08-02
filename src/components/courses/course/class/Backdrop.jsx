import React, { useContext } from "react";
import { hideModal } from "../../../../actions/modalActions";
import { ModalContext } from "../../../../context/ModalContext";

const Backdrop = ({ children }) => {
    const { modalDispatch } = useContext(ModalContext)

    const onClickContainer = (e) => {
        if (e.target === e.currentTarget) {
            modalDispatch(hideModal())
        }
    }
    return (
        <div onClick={onClickContainer} className="backdrop">
            {children}
        </div>
    )
}

export default Backdrop