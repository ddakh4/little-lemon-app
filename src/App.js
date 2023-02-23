import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/Home/HomePage';
import BookingPage from './pages/Booking/BookingPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ConfirmedBooking from './components/ConfirmedBooking';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname === "/" ? "Home" : location.pathname;
  }, [location]);
  return (
    <>
      <Nav />
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route  path="/booking" element={<BookingPage />} />
        <Route  path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
