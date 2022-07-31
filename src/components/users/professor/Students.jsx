import React, { useState } from "react";
import StudentsListFetcher from "./StudentsListFetcher";
import addStudentIcon from '../../../assets/icons/add-student.png'
import searchIcon from '../../../assets/icons/search.png'
import IconedLink from "../../general/IconedLink";

const Students = () => {
    const [filter, setFilter] = useState("")
    return (
        <div className="home-links">
            <IconedLink to={'add-student'} icon={addStudentIcon} label={'Add Student'} />
            <div className='courses-link'>
                <img src={searchIcon} alt="icon" className="icon-container" />
                <input type={'text'} onChange={(e) => setFilter(e.target.value)}></input>
            </div>
            <StudentsListFetcher filter={filter} />
        </div>
    )
}

export default Students