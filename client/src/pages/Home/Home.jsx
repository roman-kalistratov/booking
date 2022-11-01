import React from 'react';
import { Footer, Header, Navbar, TopTours, WhyRTours, Destinations,Adventures } from '../../components';

import './home.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div class="wrapper">
        <main class="main">
          <TopTours />
          <WhyRTours />
          <Destinations />
          <Adventures />


        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home