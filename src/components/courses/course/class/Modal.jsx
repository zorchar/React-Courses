import { useContext } from "react"
import { ModalContext } from "../../../../context/ModalContext"
import BackdropClassModal from "./BackdropClassModal"

const Modal = () => {
    const { modalComponent, isModalShown, setIsModalShown } = useContext(ModalContext)

    return isModalShown && (
        <BackdropClassModal setIsBackdropShown={setIsModalShown}>
            <div className="modal">
                {modalComponent}
            </div>
        </BackdropClassModal>
    )
}

export default Modal