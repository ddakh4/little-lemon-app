import React from "react";
import BookingForm from "../../components/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import BookingHeading from "../../components/BookingHeading";

export default function BookingPage () {
    function updateTimes(date){
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output)
    return (
        <>
        <BookingHeading />
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    )
}

