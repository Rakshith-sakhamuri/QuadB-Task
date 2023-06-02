import logo from './logo.svg';
import './App.css';
import TvShows from './components/TvShows';
import MyComponent from './NewComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import HomePage from './HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/running" element={<MyComponent status="Running" />} />
        <Route path="/ended" element={<MyComponent status="Ended" />} />
        <Route path="/booking/:id" element={<BookingForm />} /> {/* Add this line */}
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
