import axios from 'axios'

const url = 'http://localhost:4000/'

export const addReasonToAbsence = async (body, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    try {
        const course = await axios.patch(url + 'absences/add-reason', body, { headers })
        return course.data.data
    } catch (error) {
        alert(error.response.data.message)
    }
}