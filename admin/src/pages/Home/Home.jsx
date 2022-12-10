import React from 'react';
import { Sidebar,Navbar } from '../../components';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar />        
      </div>
    </div>
  )
}

export default Home