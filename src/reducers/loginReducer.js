export const initialLoginState = { user: 'pending', isProfessor: 'pending' }

export const loginReducer = (loginState, action) => {
    const newLoginState = {
        ...loginState
    }
    switch (action.type) {
        case 'LOGIN':
            newLoginState.user = action.user
            newLoginState.isProfessor = action.isProfessor
            newLoginState.token = action.token
            localStorage.setItem('loginState', JSON.stringify(newLoginState))
            return newLoginState
        case 'LOGOUT':
            newLoginState.user = null
            newLoginState.isProfessor = null
            newLoginState.token = null
            localStorage.removeItem('loginState')
            return newLoginState
        default:
            return loginState
    }
}