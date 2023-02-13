import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Home/HomePage";
import BookingPage from "../pages/Booking/BookingPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  );
}
