import axios from 'axios'

const url = 'http://localhost:4000/professors/'
export const createStudent = async (newStudent) => {
    try {
        // const axiosConfig = {
        //     method: 'post',
        //     url: 'http://localhost:4000/professors/create-student',
        //     data: {
        //         newStudent
        //     }
        // }
        // await axios(axiosConfig)

        const student = await axios.post(url + 'student/create', newStudent)
        console.log(student.data.data);
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const getStudents = async () => {
    try {
        const students = await axios.get(url + 'students')
        return students.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const getStudent = async (studentParam) => {
    try {
        const student = await axios.get(url + 'students/' + studentParam)
        return student.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const getProfessor = async (professorParam) => {
    try {
        const professor = await axios.get(url + 'professors/' + professorParam)
        return professor.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}