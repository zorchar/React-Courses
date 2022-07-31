import { ACTIONS } from "../actions/coursesActions"

const coursesReducer = (coursesState, action) => {
    switch (action.type) {
        case ACTIONS.SET_COURSES:
            return {
                ...coursesState,
                courses: action.payload.courses
            }
        case ACTIONS.SET_CURRENT_COURSE:
            return {
                ...coursesState,
                currentCourse: action.payload.currentCourse
            }
        case ACTIONS.SET_LAST_CLICKED_CLASS_DATE:
            return {
                ...coursesState,
                lastClickedClassDate: action.payload.lastClickedClassDate
            }
        default:
            return coursesState
    }
}

export default coursesReducer
