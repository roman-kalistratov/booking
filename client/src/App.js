import React from 'react';
import { Home, Destinations,Profile,EditProfile,Users } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import {ScrollToTop } from './components';


function App() {

  
  return (
    <>
    <ScrollToTop/>
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/destinations" element={<Destinations />} />
          <Route exact  path="/profile" element={<Profile />} />
          <Route exact  path="/users" element={<Users />} />
               
      
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
