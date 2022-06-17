export const initialLoginState = { user: null, isProf: null }

export const loginReducer = (loginState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return ({
                ...loginState,
                user: action.email,
                isProf: action.isProf
            })
        case 'LOGOUT':
            return ({
                ...loginState,
                user: null,
                isProf: null
            })
        default:
            return loginState
    }
}