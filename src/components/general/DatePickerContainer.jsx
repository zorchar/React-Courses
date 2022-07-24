import DatePicker from "react-datepicker";

const DatePickerContainer = ({ labelTitle, name, id, placeholderText, startDate, endDate, options, handleChange, selected }) => {
    return (
        <div className="course-info">
            <label htmlFor={id}>{labelTitle}</label>
            <DatePicker
                name={name}
                id={id}
                style={{ display: 'inline' }}
                isClearable
                filterDate={d => {
                    return new Date(2021, 8, 1) <= d;
                }}
                placeholderText={placeholderText}
                dateFormat="MMMM d, yyyy"
                selected={selected}
                startDate={startDate}
                endDate={endDate}
                {...options}
                onChange={handleChange}
            />
        </div>
    )
}

export default DatePickerContainer