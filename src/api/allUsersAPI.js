import axios from "axios"
import { setCurrentCourse } from "../actions/coursesActions"

const url = process.env.REACT_APP_API_URL

export const getCourse = async (courseId) => {
    const course = await axios.get(url + 'courses/' + courseId)
    return course.data.data
}

export const getAndSetCourse = async (courseId, coursesDispatch) => {
    try {
        const requestedCourse = await getCourse(courseId)
        coursesDispatch(setCurrentCourse(requestedCourse))
    } catch (error) {
        console.log(error);
    }
}
