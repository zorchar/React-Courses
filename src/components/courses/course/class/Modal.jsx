import { useContext } from "react"
import { ModalContext } from "../../../../context/ModalContext"
import Backdrop from "./Backdrop"

const Modal = () => {
    const { modalContent, isModalShown } = useContext(ModalContext).modalState

    return (isModalShown &&
        <Backdrop >
            <div className="modal">
                {modalContent}
            </div>
        </Backdrop>
    )
}

export default Modal