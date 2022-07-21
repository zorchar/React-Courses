import { useContext } from "react"
import { CoursesContext } from "../../../context/CoursesContext"

const Schedule = ({ value, onClickClass }) => {
    const { setLastClickedClass } = useContext(CoursesContext)

    const addClickedClassToCell = (e) => {
        e.target.className = e.target.className.concat(' clicked')
        setLastClickedClass(e.target)
    }

    return (
        <div>
            <div className="schedule">{value.map((date, j) => {
                const isPostDate = new Date() > new Date(date)
                const isPostDateStyleString = isPostDate ? '' : 'background-gray'

                return <div className={`grid-cell ${isPostDateStyleString}`} onClick={(e) => { onClickClass(date); addClickedClassToCell(e) }} key={date}>Class {j + 1}</div>
            })}</div>
        </div>
    )
}

export default Schedule