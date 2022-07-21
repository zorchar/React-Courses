import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerContainer = ({ labelTitle, name, id, placeholderText, startDate, endDate, options, handleChange }) => {
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
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                {...options}
                onChange={handleChange}
            />
        </div>
    )
}


export default function TableDatePicker() {
    const [startDate, setStartDate] = useState(new Date(2021, 8, 1));
    const [endDate, setEndDate] = useState(new Date(2023, 1, 28));

    const handleStartDate = date => setStartDate(date)
    const handleEndDate = date => setEndDate(date)

    return (
        <>
            {/* <DatePickerContainer
                labelTitle="Start Date:"
                id="start-date"
                name="startDate"
                placeholderText="Select Start Date"
                startDate={startDate}
                endDate={endDate}
                options={{ selectsStart: true }}
                handleChange={handleStartDate}
            />
            <DatePickerContainer
                labelTitle="End Date:"
                id="end-date"
                name="endDate"
                placeholderText="Select End Date"
                startDate={startDate}
                endDate={endDate}
                options={{ selectsEnd: true, minDate: startDate }}
                handleChange={handleEndDate}
            /> */}
            <div className="course-info">
                <label htmlFor='start-date'>Start Date:</label>
                <DatePicker
                    name="startDate"
                    id="start-date"
                    style={{ display: 'inline' }}
                    isClearable
                    filterDate={d => {
                        return new Date(2021, 8, 1) <= d;
                    }}
                    placeholderText="Select Start Date"
                    dateFormat="MMMM d, yyyy"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={date => setStartDate(date)}
                />
            </div>
            <div className="course-info">
                <label htmlFor='end-date'>End Date:</label>
                <DatePicker
                    name="endDate"
                    id="end-date"
                    isClearable
                    filterDate={d => {
                        return new Date(2022, 8, 1) <= d;
                    }}
                    placeholderText="Select End Date"
                    dateFormat="MMMM d, yyyy"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                />
            </div>
        </>
    );
}