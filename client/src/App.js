import React from 'react';
import { Home, Login, Tours, Register } from './pages';
import { Profile, Users, Destinations, ToursAdmin } from './admin/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { ScrollToTop } from './components';

function App() {
  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/tours" element={<Tours />} />
          {/* <Route exact path="/admin/profile" element={<Profile />} />
          <Route exact path="/admin/users" element={<Users />} />
          <Route exact path="/admin/destinations" element={<Destinations />} />
          <Route exact path="/admin/tours" element={<ToursAdmin />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
