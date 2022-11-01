import React from 'react';
import { Divider } from '../../components';
import { images } from '../../constants';

import './destinations.scss';

const Destinations = () => {
  return (
    <section className='destinations container'>
      <h2 className="destinations__title">Destinations</h2>
      <p className="destinations__text">Find things to do in cities around the world</p>
      <Divider />

      <div className="destinations__items">
        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>
        
        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>

        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>

        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>

        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>

        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>

        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>

        <div className='destinationItem'>
          <div className="destinationItem__img" style={{ backgroundImage: `url(${images.slide3})` }}></div>
          <div className="destinationItem__info">
            <h2 className='destinationItem__title'>Madrid</h2>
            <h4 className="destinationItem__subtitle">393 thingins to do</h4>
          </div>
        </div>
      </div>
      
      <button type='bottom' className='destinations__btn btn'>show more</button>
    </section>
  )
}

export default Destinations