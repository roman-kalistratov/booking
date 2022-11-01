import React from 'react';
import Slider from '../Slider/Slider';
import './topTours.scss';

const TopTours = () => {
    return (
        <section className='topTours container'>
            <h2 className='topTours__title'>Top Tours</h2>
            <p className="topTours__text">Choose Your Next Vacation</p>


            
                <Slider.TopToursSlider />

         
        </section>
    )
}

export default TopTours