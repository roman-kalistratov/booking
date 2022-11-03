import React from 'react';
import { Footer, Header, Navbar, TopTours, WhyRTours, Destinations, Adventures, Subscribe,ScrollToTop } from '../../components';

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
          <Subscribe />
          <Adventures />


        </main>
        <Footer />
      </div>
      <ScrollToTop/>
    </>
  )
}

export default Home