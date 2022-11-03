import React from 'react';
import { Footer, Navbar,Filters,ScrollToTop } from '../../components';
import './destinations.scss';

const Destinations = () => {
  return (
    <>
      <Navbar />
     
      <div class="wrapper">
        <main class="main">
          <div className="main__container container">
                <div className="main__left"><Filters/></div>
                <div className="main__right">fasfa</div>
          </div>


        </main>
        <Footer />
      </div>
      <ScrollToTop/>
    </>
  )
}

export default Destinations