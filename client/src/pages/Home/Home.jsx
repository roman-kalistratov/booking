import React from 'react';
import { Footer, Header, Navbar, TopTours, WhyRTours, Destinations } from '../../components';

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


        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home