import React from 'react';
import { Home, Login, List, Tour, Register, ThankYou } from './pages';

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
          <Route exact path="/tours" element={<List />} />
          <Route path="/tours/:id" element={<Tour/>}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/thankYouPage" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
