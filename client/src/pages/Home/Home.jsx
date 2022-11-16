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
  Spinner,
  Search
} from '../../components';

const Home = () => {
  return (
    <>
      <Navbar />

      <Header />
      <div class="wrapper">
        <main class="main">
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