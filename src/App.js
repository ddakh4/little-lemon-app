import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/Home/HomePage';
import BookingPage from './pages/Booking/BookingPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {
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
