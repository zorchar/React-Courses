export const loginAction = ({ user, isProfessor }) => ({
    type: 'LOGIN',
    user,
    isProfessor
})

export const logoutAction = () => ({
    type: 'LOGOUT',
})