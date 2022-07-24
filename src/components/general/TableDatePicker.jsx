import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import DatePickerContainer from "./DatePickerContainer";

export default function TableDatePicker() {
    const [startDate, setStartDate] = useState(new Date(2021, 8, 1));
    const [endDate, setEndDate] = useState(new Date(2023, 1, 28));

    const handleStartDate = date => setStartDate(date)
    const handleEndDate = date => setEndDate(date)

    return (
        <>
            <DatePickerContainer
                labelTitle="Start Date:"
                id="start-date"
                name="startDate"
                placeholderText="Select Start Date"
                selected={startDate}
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
                selected={endDate}
                startDate={startDate}
                endDate={endDate}
                options={{ selectsEnd: true, minDate: startDate }}
                handleChange={handleEndDate}
            />
        </>
    );
}