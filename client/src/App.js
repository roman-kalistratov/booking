import React from 'react';
import { Home, Destinations } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import {ScrollToTop } from './components';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
