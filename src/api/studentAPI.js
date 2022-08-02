import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const addReasonToAbsence = async (absenceId, reason, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const routeUrl = `${url}absences/${absenceId}/add-reason`
        const course = await axios.patch(routeUrl, reason, { headers })
        return course.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getReasonFromAbsence = async (reason, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const response = await axios.put(url + 'absences/get-reason', reason, { headers })
        return response.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

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

export const loginStudent = async (email, password) => {
    const body = {
        email,
        password
    };
    try {
        const student = await axios.post(url + 'students/login', body)
        return student.data.data
    } catch (error) {
        alert('Unable to login.')
    }
}