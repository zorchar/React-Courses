import { useContext } from "react"
import { setIsModalShown } from "../../../../actions/modalActions"
import { ModalContext } from "../../../../context/ModalContext"
import Backdrop from "./Backdrop"

const Modal = () => {
    const { modalContent, isModalShown } = useContext(ModalContext).modalState
    const { modalDispatch } = useContext(ModalContext)

    return (
        <>
            {
                isModalShown
                &&
                <Backdrop setIsBackdropShown={() => modalDispatch(setIsModalShown())}>
                    <div className="modal">
                        {modalContent}
                    </div>
                </Backdrop>
            }
        </>
    )
}

export default Modal