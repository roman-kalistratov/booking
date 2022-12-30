import React from 'react';
import {
  Footer,
  Header,
  Navbar,
  ScrollToTop,
  Search
} from '../../components';

import {
  TopTours,
  WhyRTours,
  Destinations,
  Subscribe,
  Adventures
} from '../../sections';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="wrapper">
        <main className="main">
           <Search />
         <TopTours />
           <WhyRTours />
          <Destinations />
          <Subscribe />
          <Adventures />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}

export default Home