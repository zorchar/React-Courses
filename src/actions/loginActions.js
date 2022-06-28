export const loginAction = ({ user, isProfessor, token }) => ({
    type: 'LOGIN',
    user,
    isProfessor,
    token
})

export const logoutAction = () => ({
    type: 'LOGOUT',
})