import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"

const CloseModalButton = () => {
    const { setIsModalShown } = useContext(ModalContext)
    return (
        <div className="close-button" onClick={() => setIsModalShown(false)}>
            X
        </div>
    )
}

export default CloseModalButton