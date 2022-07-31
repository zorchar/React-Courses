export const ACTIONS = {
    SET_COURSES: 'SET_COURSES',
    SET_CURRENT_COURSE: 'SET_CURRENT_COURSE',
    SET_LAST_CLICKED_CLASS_DATE: 'SET_LAST_CLICKED_CLASS_DATE'
}

export const setCourses = (courses) => ({
    type: ACTIONS.SET_COURSES,
    payload: { courses }
})
export const setCurrentCourse = (course) => ({
    type: ACTIONS.SET_CURRENT_COURSE,
    payload: { currentCourse: course }
})
export const setLastClickedClassDate = (date) => ({
    type: ACTIONS.SET_LAST_CLICKED_CLASS_DATE,
    payload: { lastClickedClassDate: date }
})