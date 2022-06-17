import bcrypt from 'bcryptjs';


export const students = [
    {
        email: 'student1@students.com',
        password: '123'
    },
    {
        email: 'student2@students.com',
        password: '123'
    }
];

(() => {
    students.forEach(async student => {
        student.password = await bcrypt.hash(student.password, 8)
    })
})()
