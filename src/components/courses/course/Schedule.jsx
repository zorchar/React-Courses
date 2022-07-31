const Schedule = ({ schedule, onClickClass }) => {
    return (
        <div>
            <div className="schedule">{schedule.map((date, j) => {
                const isPostDate = new Date() > new Date(date)
                const isPostDateStyleString = isPostDate ? '' : 'background-gray'

                return <div className={`grid-cell ${isPostDateStyleString}`} onClick={(e) => { onClickClass(date) }} key={date}>Class {j + 1}</div>
            })}</div>
        </div>
    )
}

export default Schedule