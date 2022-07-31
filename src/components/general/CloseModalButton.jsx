import { useContext } from "react"
import { setIsModalShown } from "../../actions/modalActions"
import { ModalContext } from "../../context/ModalContext"

const CloseModalButton = () => {
    const { modalDispatch } = useContext(ModalContext)
    return (
        <div className="close-button" onClick={() => modalDispatch(setIsModalShown(false))}>
            X
        </div>
    )
}

export default CloseModalButton