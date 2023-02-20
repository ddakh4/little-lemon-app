import React from "react";
import BookingForm from "../../components/BookingForm";
import { useReducer } from "react";

export default function BookingPage () {
    // function updateTimes(date){
    //     return fetchAPI(date);
    // }

    // const output = fetchAPI(new Date());

    // const [availableTimes, dispatch] = useReducer(updateTimes, output)
    return (
        <>
        <BookingForm />
        {/* <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/> */}
        </>
    )
}

