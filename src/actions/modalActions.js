export const ACTIONS = {
    SET_IS_MODEL_SHOWN: 'SET_IS_MODEL_SHOWN',
    SET_MODAL_CONTENT: 'SET_MODAL_CONTENT',
}

export const setIsModalShown = (isModalShown) => ({
    type: ACTIONS.SET_IS_MODEL_SHOWN,
    payload: { isModalShown }
})
export const setModalContent = (modalContent) => ({
    type: ACTIONS.SET_MODAL_CONTENT,
    payload: { modalContent }
})
