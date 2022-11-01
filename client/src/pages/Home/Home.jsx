import React from 'react';
import { Footer, Header, Navbar, TopTours } from '../../components';

import './home.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div class="wrapper">
        <main class="main">
          <TopTours/>


        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home