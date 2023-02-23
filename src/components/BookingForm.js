import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { submitAPI } from "../bookingsAPI";
import { useNavigate } from "react-router-dom";


function BookingForm(props) {
   const [date, setDate] = useState("")
   const [occasion, setOccasion] = useState("")
   const [guests, setGuests] = useState("")
   const [finalTime, setFinalTime] = useState(
      props.availableTimes.map((times) => <option>{times}</option>)
   )
   const [formErrors, setFormErrors] = useState({})

   function handleDataChange(e) {
      setDate(e.target.value)
      var stringify = e.target.value
      const date = new Date(stringify)
      props.updateTimes(date);
      setFinalTime(props.availableTimes.map((times) => <option>{times}</option>))
   }

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validateForm();
      if (Object.keys(errors).length === 0) {
      const formData = {
         finalTime,
         guests,
         date,
         occasion,
      };
      console.log(formData);
      if (submitAPI(formData) === true) {
         navigate('/confirmation');
      }
   }
      else {
         setFormErrors(errors);
      }
   };

   function validateForm() {
      const errors = {};

      if (!date) {
         errors.date = "Please choose a date.";
      }

      if (!finalTime) {
         errors.finalTime = "Please select a time.";
      }

      if (!guests) {
         errors.guests = "Please choose the number of guests.";
      }

      if (!occasion) {
         errors.occasion = "Please choose an occasion.";
      }

      return errors;
   }


   return (
      <>
         <form className="booking-form" data-testid="booking-form" onSubmit={handleSubmit}>
            <div>
               <label htmlFor="res-date">Choose date</label> <br></br>
               <input type="date" id="res-date" data-testid="date"
                  required value={date} onChange={handleDataChange} min={new Date().toISOString().slice(0, 10)}
               />
               {formErrors.date && <div className="error">{formErrors.date}</div>}
            </div>
            <div>
               <label htmlFor="res-time">Choose time</label> <br></br>
               <select id="res-time" required data-testid="time">{finalTime}</select>
               {formErrors.time && <div className="error">{formErrors.time}</div>}
            </div>
            <div>
               <label htmlFor="guests">Number of Guests</label> <br></br>
               <input type="number" placeholder="1" min="1" max="10" id="res-guests" data-testid="guests"
                  required value={guests} onChange={(e) => setGuests(e.target.value)}
               />
               {formErrors.guests && <div className="error">{formErrors.guests}</div>}
            </div>
            <div>
               <label htmlFor="occasion">Occasion</label> <br></br>
               <select id="res-occasion" data-testid="occasion"
                  required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                  <option></option>
                  <option>No Occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>Other</option>
               </select>
               {formErrors.occasion && <div className="error">{formErrors.occasion}</div>}
            </div>
            <div>
               <Link className="action-button" to="/confirmation" data-testid="submit" onClick={handleSubmit}>
                  Book Table
               </Link>
            </div>
         </form>
      </>
   );
}

export default BookingForm