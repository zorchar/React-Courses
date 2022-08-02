import { useContext } from "react"
import { hideModal } from "../../actions/modalActions"
import { ModalContext } from "../../context/ModalContext"

const CloseModalButton = () => {
    const { modalDispatch } = useContext(ModalContext)

    const handleCloseModal = () => modalDispatch(hideModal())

    return (
        <div className="close-button" onClick={handleCloseModal}>
            X
        </div>
    )
}

export default CloseModalButton