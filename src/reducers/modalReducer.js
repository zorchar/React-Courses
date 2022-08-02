import { ACTIONS } from "../actions/modalActions"

const modalReducer = (modalState, action) => {
    switch (action.type) {
        case ACTIONS.HIDE_MODAL: {
            return {
                ...modalState,
                isModalShown: false
            }
        }

        case ACTIONS.SHOW_MODAL_AND_SET_CONTENT: {
            return {
                ...modalState,
                modalContent: action.payload.modalContent,
                isModalShown: true
            }
        }

        default:
            return modalState
    }
}

export default modalReducer