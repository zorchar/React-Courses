
import { useReducer } from "react";
import { createContext } from "react";
import modalReducer from "../reducers/modalReducer";

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {

    const initialModalState = {
        isModalShown: false,
        modalContent: null
    }

    const [modalState, modalDispatch] = useReducer(modalReducer, initialModalState)

    return (
        <ModalContext.Provider value={{ modalState, modalDispatch }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider