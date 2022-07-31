import { ACTIONS } from "../actions/modalActions"

const modalReducer = (modalState, action) => {
    switch (action.type) {
        case ACTIONS.SET_IS_MODEL_SHOWN:
            return {
                ...modalState,
                isModalShown: action.payload.isModalShown
            }
        case ACTIONS.SET_MODAL_CONTENT:
            return {
                ...modalState,
                modalContent: action.payload.modalContent
            }

        default:
            return modalState
    }
}

export default modalReducer