
import { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {
    const [isModalShown, setIsModalShown] = useState(false)
    const [modalComponent, setModalComponent] = useState(null)

    return (
        <ModalContext.Provider value={{ isModalShown, setIsModalShown, modalComponent, setModalComponent }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider