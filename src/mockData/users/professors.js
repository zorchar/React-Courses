import bcrypt from 'bcryptjs';

export const professors = [
    {
        email: 'professor1@professors.com',
        password: '123'
    },
    {
        email: 'professor2@professors.com',
        password: '123'
    }
];


(() => {
    professors.forEach(async professor => {
        professor.password = await bcrypt.hash(professor.password, 8)
    })
})()
