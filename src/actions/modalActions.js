export const ACTIONS = {
    SHOW_MODAL_AND_SET_CONTENT: 'SHOW_MODAL_AND_SET_CONTENT',
    HIDE_MODAL: 'HIDE_MODAL'
}

export const hideModal = () => ({
    type: ACTIONS.HIDE_MODAL,
    payload: { isModalShown: false }
})

export const showModalAndSetContent = (modalContent) => ({
    type: ACTIONS.SHOW_MODAL_AND_SET_CONTENT,
    payload: {
        isModalShown: true,
        modalContent
    }
})
