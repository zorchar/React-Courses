export const initialLoginState = { user: 'pending', isProfessor: 'pending', token: 'pending' }

export const loginReducer = (loginState, action) => {
    const newLoginState = {
        ...loginState
    }
    switch (action.type) {
        case 'LOGIN':
            for (let key in action) {
                if (key !== 'type')
                    newLoginState[key] = action[key]
            }
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