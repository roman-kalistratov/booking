import React from 'react';
import {
  Footer,
  Header,
  Navbar,
  TopTours,
  WhyRTours,
  Destinations,
  Adventures,
  Subscribe,
  ScrollToTop,
  Search
} from '../../components';

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