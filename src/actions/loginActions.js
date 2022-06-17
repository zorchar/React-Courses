export const loginAction = ({ email, isProf }) => ({
    type: 'LOGIN',
    email,
    isProf
})

export const logoutAction = () => ({
    type: 'LOGOUT',
})