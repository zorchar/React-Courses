import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
    const [startDate, setStartDate] = useState(new Date(2022, 8, 1));
    const [endDate, setEndDate] = useState(new Date(2023, 1, 28));

    return (
        <>
            <div className="flex-center">
                <label htmlFor='start-date'>Start Date</label>
                <DatePicker
                    name="startDate"
                    id="start-date"
                    style={{ display: 'inline' }}
                    isClearable
                    filterDate={d => {
                        return new Date(2022, 8, 1) <= d;
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
            <div className="flex-center">
                <label htmlFor='end-date'>End Date</label>
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