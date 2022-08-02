import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const addReasonToAbsence = async (absenceId, reason, token) => {
    const routeUrl = url + 'absences/' + absenceId + '/add-reason'
    const headers = { 'Authorization': 'Bearer ' + token }

    const course = await axios.patch(routeUrl, reason, { headers })

    return course.data.data
}

export const getReasonFromAbsence = async (reason, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const response = await axios.post(url + 'absences/get-reason', reason, { headers })

    return response.data.data
}

export const patchStudent = async (body, token) => {
    const headers = { 'Authorization': 'Bearer ' + token }

    const response = await axios.patch(url + 'students/me', body, { headers })

    return response.data.data
}

export const loginStudent = async (email, password) => {
    const body = {
        email,
        password
    }

    const student = await axios.post(url + 'students/login', body)

    return student.data.data
}