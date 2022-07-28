import { useContext } from "react"
import { ModalContext } from "../../../../context/ModalContext"
import Backdrop from "./Backdrop"

const Modal = () => {
    const { modalComponent, isModalShown, setIsModalShown } = useContext(ModalContext)

    return (
        <>
            {
                isModalShown
                &&
                <Backdrop setIsBackdropShown={setIsModalShown}>
                    <div className="modal">
                        {modalComponent}
                    </div>
                </Backdrop>
            }
        </>
    )
}

export default Modal