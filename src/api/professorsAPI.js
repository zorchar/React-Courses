import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const createStudent = async (newStudent, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const student = await axios.post(url + 'students/create', newStudent, { headers })
        return student.data.data
    } catch (error) {
        alert(error.response.data.message)
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

export const signInProfessor = async (email, password) => {
    const body = {
        email,
        password
    };
    try {
        const professor = await axios.post(url + 'professors/signin', body)
        return professor.data.data
    } catch (error) {
        alert('Unable to login.')
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

export const registerForCourse = async (courseId, studentId, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    const article = {
        courseId,
        studentId
    };
    try {
        const response = await axios.patch(url + 'students/register', article, { headers })
        return response.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const createAbsence = async (courseId, studentId, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    const article = {
        courseId,
        studentId
    };
    try {
        const response = await axios.post(url + 'absences/create', article, { headers })
        return response.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const removeFromCourse = async (courseId, studentId, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    const article = {
        courseId,
        studentId
    };
    try {
        const response = await axios.patch(url + 'students/unregister', article, { headers })
        return response.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const deleteAbsence = async (courseId, studentId, token) => {
    try {
        const deletedCount = await axios.delete(url + 'absences/delete', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            data: {
                courseId,
                studentId
            }
        })
        return deletedCount.data.data
    } catch (error) {
        throw (error.response.data.message)
    }
}

export const getAbsencesOfDateAndCourse = async (data, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const response = await axios.put(url + 'absences/get-absences-course-and-date', data, { headers })
        return response.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}