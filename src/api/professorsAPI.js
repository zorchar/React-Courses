import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const createStudent = async (newStudent, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const student = await axios.post(url + 'students/new', newStudent, { headers })

    return student.data.data
}

export const patchProfessor = async (body, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const response = await axios.patch(url + 'professors/me', body, { headers })

    return response.data.data
}

export const getStudents = async (token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const response = await axios.get(url + 'students', { headers })

    return response.data.data
}

export const getStudent = async (studentId, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const student = await axios.get(url + 'students/' + studentId, { headers })

    return student.data.data
}

export const loginProfessor = async (email, password) => {
    const body = {
        email,
        password
    }

    const professor = await axios.post(url + 'professors/login', body)

    return professor.data.data
}

export const deleteStudent = async (studentId, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const deletedCount = await axios.delete(url + 'students/' + studentId, { headers })

    return deletedCount.data.data
}

export const createCourse = async (body, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const course = await axios.post(url + 'courses/new', body, { headers })

    return course.data.data
}

export const deleteCourse = async (courseId, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const deletedCount = await axios.delete(url + 'courses/' + courseId, { headers })

    return deletedCount.data.data
}

export const getAllCourses = async () => {
    const response = await axios.get(url + 'courses')

    return response.data.data
}

export const registerForCourse = async (courseId, studentId, token) => {
    const routeUrl = url + 'courses/' + courseId + '/register'
    const headers = { 'Authorization': 'Bearer ' + token }
    const body = { studentId }

    const response = await axios.patch(routeUrl, body, { headers })

    return response.data.data
}
export const removeFromCourse = async (courseId, studentId, token) => {
    const routeUrl = url + 'courses/' + courseId + '/unregister'
    const headers = { 'Authorization': 'Bearer ' + token }
    const body = { studentId }

    const response = await axios.patch(routeUrl, body, { headers })

    return response.data.data
}

export const getAbsencesOfDateAndCourse = async (data, token) => {
    const routeUrl = url + 'absences/get-absences-course-and-date'
    const headers = { 'Authorization': 'Bearer ' + token }

    const response = await axios.post(routeUrl, data, { headers })

    return response.data.data
}