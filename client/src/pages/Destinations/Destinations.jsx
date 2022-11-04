import React from 'react';
import { Footer, Navbar, Filters, ScrollToTop } from '../../components';
import { GrFormClose } from "react-icons/gr";

import './destinations.scss';

const Destinations = () => {
  return (
    <>
      <Navbar />

      <div class="wrapper">
        <main class="main">
          <div className="main__container container">
            <div className="main__left"><Filters /></div>
            <div className="main__right">
                
              <h3 className="filters__found-info">123 results were found</h3>
              <h3 className="filters__found-info">Applied filters</h3>
              <div className="filters__selected">
                <div className="filters__selected-item">
                  <h4 className="filters__selected-name">category</h4>
                  <h4 className="filters__selected-value">tours</h4>
                  <div className="filters__selected-removeBtn"><GrFormClose /></div>
                </div>
                <div className="filters__selected-item">
                  <h4 className="filters__selected-name">category</h4>
                  <h4 className="filters__selected-value">tours</h4>
                  <div className="filters__selected-removeBtn"><GrFormClose /></div>
                </div>
                <div className="filters__selected-item">
                  <h4 className="filters__selected-name">category</h4>
                  <h4 className="filters__selected-value">tours</h4>
                  <div className="filters__selected-removeBtn"><GrFormClose /></div>

                </div>
                <h4 className="filters__selected-clearAll">Clear All</h4>
              </div>

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