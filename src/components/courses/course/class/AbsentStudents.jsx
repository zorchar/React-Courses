import studentIcon from '../../../../assets/icons/student-male.png'

const AbsentStudents = ({ absentStudents }) => {
    console.log(absentStudents)
    return (absentStudents.length > 0 &&
        <div className='flex-column-center'>Students who were absent:<br /><br />
            {absentStudents.map((student) => {
                return (
                    <div className='courses-link2' key={student.student} >
                        <img src={studentIcon} alt="none" className="icon-container" />
                        {student.student}<br />
                        Reason: {student.reason}<br /><br />
                    </div>
                )
            })}
        </div>
    )
}

export default AbsentStudents