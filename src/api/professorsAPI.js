import axios from 'axios'

const url = 'http://localhost:4000/'

export const createStudent = async (newStudent, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
        // 'Content-Type': 'application/json',
        // 'My-Custom-Header': 'foobar'
    };
    try {
        // const axiosConfig = {
        //     method: 'post',
        //     url: 'http://localhost:4000/professors/create-student',
        //     data: {
        //         newStudent
        //     }
        // }
        // await axios(axiosConfig)

        const student = await axios.post(url + 'students/create', newStudent, { headers })
        return student.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

// only for students - change location
export const patchStudent = async (body, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const response = await axios.patch(url + 'students/me', body, { headers })
        return response.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const patchProfessor = async (body, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const response = await axios.patch(url + 'professors/me', body, { headers })
        return response.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const getStudents = async () => {
    try {
        const response = await axios.get(url + 'students')
        return response.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const getStudent = async (studentId, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const student = await axios.get(url + 'students/' + studentId, { headers })
        return student.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

// no longer needed
// export const getProfessor = async () => {
//     try {
//         const professor = await axios.get(url + 'professors/me')
//         return professor.data.data
//     } catch (error) {
//         console.error(error.response.data.message)
//     }
// }

export const signInProfessor = async (email, password) => {
    const article = {
        email,
        password
    };
    try {
        const professor = await axios.post(url + 'professors/signin', article)
        return professor.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const signInStudent = async (email, password) => {
    const article = {
        email,
        password
    };
    try {
        const student = await axios.post(url + 'students/signin', article)
        return student.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

export const deleteStudent = async (studentId, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const deletedCount = await axios.delete(url + 'students/' + studentId, { headers })
        return deletedCount.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const createCourse = async (body, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const course = await axios.post(url + 'courses/create', body, { headers })
        return course.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const deleteCourse = async (courseName, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const deletedCount = await axios.delete(url + 'courses/' + courseName, { headers })
        return deletedCount.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getCourses = async () => {
    try {
        const response = await axios.get(url + 'courses')
        return response.data.data
    } catch (error) {
        console.error(error.response.data.message)
    }
}

//student API
export const registerForCourse = async (courseId, studentId, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    const article = {
        courseId,
        studentId
    };
    try {
        const response = await axios.post(url + 'students/register', article, { headers })
        return response.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}