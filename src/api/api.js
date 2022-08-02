import axios from "axios"

//// Guy's example
export const requestWithToken = async ({
    token, method, api, route, data, params, signal
}) => {
    const config = {
        method,
        data,
        params,
        signal,
        url: `${api}/${route}`,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }
    try {
        return await axios(config)
    } catch (err) {
        throw err
    }
}

const url = process.env.REACT_APP_API_URL

export const getCourse = async (courseId) => {
    try {
        const course = await axios.get(url + 'courses/' + courseId)
        return course.data.data
    } catch (err) {
        console.error(err.response.data.message)
    }
}