import React from 'react';
import { Home, Destinations,Profile,EditProfile } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import {ScrollToTop } from './components';


function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/destinations" element={<Destinations />} />
          <Route exact  path="/profile" element={<Profile />} />
          <Route exact  path="/edit-profile" element={<EditProfile />} />
               
      
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
