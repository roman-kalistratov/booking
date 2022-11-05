import React from 'react';
import { Footer, Navbar, Filters, ScrollToTop,Results } from '../../components';

import './destinations.scss';

const Destinations = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <main className="main">
          <div className="main__container container">
            <div className="main__left"><Filters /></div>
            <div className="main__right">
                <Results/>
            

            </div>
          </div>


        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}

export default Destinations