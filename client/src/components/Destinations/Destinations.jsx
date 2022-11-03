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

      <div className="destinations__wrapper">
        {destinationsData.map((item) =>
          <div className='destinations__item'>
            <div className="destinations__item-img" style={{ backgroundImage: `url(${item.img})` }}></div>
            <div className="destinations__item-info">
              <h2 className='destinations__item-title'>{item.name}</h2>
              <h4 className="destinations__item-subtitle">{item.toursCount} thingins to do</h4>
            </div>
          </div>
        )}
      </div>

      <button type='bottom' className='destinations__btn btn'>show more</button>
    </section>
  )
}

export default Destinations


const destinationsData = [
  {
    name: "Madrid",
    toursCount: 11,
    img: images.slide1
  },
  {
    name: "Madrid",
    toursCount: 421,
    img: images.slide2
  },
  {
    name: "Madrid",
    toursCount: 122,
    img: images.slide3
  },
  {
    name: "Madrid",
    toursCount: 321,
    img: images.slide4
  },
  {
    name: "Madrid",
    toursCount: 393,
    img: images.slide3
  },
  {
    name: "Madrid",
    toursCount: 641,
    img: images.slide4
  },
  {
    name: "Madrid",
    toursCount: 213,
    img: images.slide5
  },
  {
    name: "Madrid",
    toursCount: 393,
    img: images.slide2
  }
]